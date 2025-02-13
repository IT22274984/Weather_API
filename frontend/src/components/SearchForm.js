import React, { useState } from "react";
import axios from "axios";

function SearchForm() {
  const [CITY_IDS, setCityId] = useState("");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!CITY_IDS) {
      setError("Please enter a City ID");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(`http://localhost:5000/weather/search?CITY_IDS=${CITY_IDS}`);
      setWeather(response.data);
    } catch (err) {
      setError("Failed to fetch weather data. Please check the City ID.");
    }

    setLoading(false);
  };


  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-xl text-black font-bold mb-4">Search Weather by City ID</h2>

      <input
        type="text"
        placeholder="Enter City ID"
        value={CITY_IDS}
        onChange={(e) => setCityId(e.target.value)}
        className="px-4 py-2 border rounded-lg w-full mb-4 text-black"
      />

      <button
        onClick={fetchWeather}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg w-full"
      >
        Search
      </button>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow text-black">
          <h3 className="text-lg font-semibold ">{weather.city}</h3>
          <p>{weather.condition}</p>
          <p>{weather.temperature}°C</p>
        </div>
      )}
    </div>
  );
}


export default SearchForm;
