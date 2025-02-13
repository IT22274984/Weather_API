const express = require("express");
const axios = require("axios");
const redisClient = require("../config/redisConfig");
require("dotenv").config();

const router = express.Router();
const CACHE_EXPIRY = 300; // 5 minutes

// Load city codes from JSON file
const cities = require("../cities.json");
const CITY_IDS = cities.map(city => city.CityCode).join(",");

// OpenWeatherMap API
const API_KEY = process.env.OPENWEATHER_API_KEY;
const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&units=metric&appid=${API_KEY}`;

// Fetch Weather Data (With Caching)
router.get("/", async (req, res) => {
  try {
    // Check Redis cache
    const cachedData = await redisClient.get("weather_data");
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    // Fetch from OpenWeather API
    const response = await axios.get(WEATHER_API_URL);
    const weatherData = response.data.list.map(city => ({
      city: city.name,
      temperature: city.main.temp,
      condition: city.weather[0].description,
    }));

    // Store in Redis cache
    await redisClient.setEx("weather_data", CACHE_EXPIRY, JSON.stringify(weatherData));

    res.json(weatherData);
  } catch (error) {
    console.error("❌ Error fetching weather data:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});


router.get("/search", async (req, res) => {
  const { CITY_IDS } = req.query;

  if (!CITY_IDS) {
    return res.status(400).json({ error: "City ID is required" });
  }

  try {
    // Check cache first
    const cacheKey = `weather_${CITY_IDS}`;
    const cachedData = await redisClient.get(cacheKey);

    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    // Fetch from OpenWeather API
    const WEATHER_API_URL = `http://api.openweathermap.org/data/2.5/weather?id=${CITY_IDS}&units=metric&appid=${API_KEY}`;
    const response = await axios.get(WEATHER_API_URL);

    if (response.status !== 200) {
      return res.status(response.status).json({ error: "Failed to fetch weather data" });
    }

    const weatherData = {
      city: response.data.name,
      temperature: response.data.main.temp,
      condition: response.data.weather[0].description,
    };

    // Store in Redis cache
    await redisClient.setEx(cacheKey, CACHE_EXPIRY, JSON.stringify(weatherData));

    res.json(weatherData);
  } catch (error) {
    console.error("❌ Error fetching weather data:", error.message);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;
