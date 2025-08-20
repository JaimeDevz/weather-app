import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";
import GlareHover from "./GlarHover";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      dispatch(fetchWeather(city));
      setCity("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center p-4 w-full max-w-lg mx-auto"
    >
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter a city..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-2 rounded-r-md hover:bg-blue-700 transition-colors"
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
