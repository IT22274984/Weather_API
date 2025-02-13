import React, { useEffect, useState } from "react";
import axios from "axios";

function HowItWorks() {
  const [weather, setWeather] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/weather")
      .then(response => {
        setWeather(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching weather data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="bg-gradient-to-b from-indigo-100 via-purple-50 to-pink-50 py-16">
      <h1 className="text-center text-4xl font-bold text-purple-700 mb-6">Weather Information</h1>
      <div className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center gap-12">
        {loading ? (
          <p className="text-center text-lg">Loading...</p>
        ) : (
          <div className="flex-1 text-center lg:text-left">
            {weather.map((city, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">CityName:{city.city}</h2>
                <p className="text-lg font-bold text-gray-900">Temperature:{city.temperature}°C</p>
                <p className="text-lg text-gray-600">Status:{city.condition}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default HowItWorks;
