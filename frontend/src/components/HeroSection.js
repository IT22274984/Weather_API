import React from "react";
import image from "../assets/images/weather.jpg";
import SearchForm from "./SearchForm";

function HeroSection() {
  return (
    <section
      className="relative bg-cover bg-center h-screen text-white flex flex-col justify-between"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(${image})`,
      }}
    >
      {/* Hero Content */}
      <div className="flex flex-col justify-center items-center h-3/5 text-center px-4">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold leading-tight">
        Stay Ahead with Real-Time Weather Updates
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-gray-300 max-w-xl sm:max-w-3xl">
          
        </p>

        {/* Search Form */}
      <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:top-3/4 w-full max-w-5xl mx-auto px-6 sm:px-4">
        <div className="bg-white rounded-lg shadow-xl p-8 sm:p-6">
          <SearchForm />
        </div>
      </div>
        
      </div>
      
      
    </section>
  );
}

export default HeroSection;
