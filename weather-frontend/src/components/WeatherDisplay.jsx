import React, { useRef, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import LoadingSpinner from "./LoadingSpinner";

gsap.registerPlugin(Draggable, InertiaPlugin);

const WeatherDisplay = () => {
  const { weatherData, status, error } = useSelector((state) => state.weather);
  const hourlyContainerRef = useRef(null);

  useLayoutEffect(() => {
    let draggableInstance = null;
    if (status === "succeeded" && weatherData && hourlyContainerRef.current) {
      const container = hourlyContainerRef.current;
      const parent = container.parentElement;
      const scrollWidth = container.scrollWidth;
      const parentWidth = parent.offsetWidth;

      const bounds = {
        minX: -(scrollWidth - parentWidth),
        maxX: 0,
      };

      draggableInstance = Draggable.create(container, {
        type: "x",
        edgeResistance: 0.9,
        bounds: bounds,
        inertia: true,
        cursor: "grab",
        activeCursor: "grabbing",
      });
    }
    return () => {
      if (draggableInstance && draggableInstance.length > 0) {
        draggableInstance[0].kill();
      }
    };
  }, [status, weatherData]);

  const windDirection = (deg) => {
    const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
    return directions[Math.round(deg / 45) % 8];
  };

  const formatTime = (timestamp) => {
    return new Date(timestamp * 1000).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  if (status === "loading") {
    return <LoadingSpinner />;
  }

  if (status === "failed") {
    return (
      <div className="text-center p-10 text-xl text-red-500 bg-red-500/20 rounded-lg">
        <p className="font-bold mb-2">Oops! Something went wrong.</p>
        <p className="text-base">{error}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
        >
          Try Again
        </button>
      </div>
    );
  }

  if (status === "succeeded" && weatherData) {
    const { city, list } = weatherData;

    if (!list || list.length === 0) {
      return (
        <div className="text-center p-10 text-xl text-orange-500 bg-orange-500/20 rounded-lg">
          <p className="font-bold mb-2">No weather data available.</p>
          <p className="text-base">Please try a different city.</p>
        </div>
      );
    }

    const current = list[0];
    const forecast = list.filter((_, index) => index % 8 === 0).slice(0, 5);
    const hourly = list.slice(1, 9);

    return (
      <div className="p-4 max-w-4xl mx-auto text-gray-800">
        {/* Current Weather */}
        <div className="bg-white/70 backdrop-blur-sm p-6 rounded-lg shadow-lg mb-6 border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-bold">
                {city.name}, {city.country}
              </h2>
              <p className="text-lg capitalize">
                {current.weather[0].description}
              </p>
            </div>
            <div className="text-right">
              <img
                src={`https://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
                alt="weather icon"
                className="w-20 h-20 -mt-4"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-6xl font-bold">
              {Math.round(current.main.temp)}°F
            </p>
            <div className="text-right text-sm grid grid-cols-2 gap-x-4 gap-y-1">
              <p>
                <strong>Feels like:</strong>{" "}
                {Math.round(current.main.feels_like)}°F
              </p>
              <p>
                <strong>Humidity:</strong> {current.main.humidity}%
              </p>
              <p>
                <strong>Wind:</strong> {current.wind.speed} mph{" "}
                {windDirection(current.wind.deg)}
              </p>
              <p>
                <strong>Pressure:</strong> {current.main.pressure} hPa
              </p>
              <p>
                <strong>Sunrise:</strong> {formatTime(city.sunrise)}
              </p>
              <p>
                <strong>Sunset:</strong> {formatTime(city.sunset)}
              </p>
            </div>
          </div>
        </div>

        {/* Hourly Forecast */}
        <div className="mb-6 overflow-hidden">
          <h3 className="text-2xl font-bold text-white mb-4">
            Hourly Forecast
          </h3>
          <div ref={hourlyContainerRef} className="flex gap-4 pb-4 cursor-grab">
            {hourly.map((item) => (
              <div
                key={item.dt}
                className="flex-shrink-0 bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md text-center border border-gray-200 w-32 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
              >
                <p className="font-semibold">
                  {new Date(item.dt * 1000).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="forecast icon"
                  className="mx-auto"
                />
                <p className="font-bold">{Math.round(item.main.temp)}°F</p>
              </div>
            ))}
          </div>
        </div>

        {/* 5-Day Forecast */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">5-Day Forecast</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {forecast.map((item) => (
              <div
                key={item.dt}
                className="bg-white/60 backdrop-blur-sm p-4 rounded-lg shadow-md text-center border border-gray-200 transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
              >
                <p className="font-semibold">
                  {new Date(item.dt_txt).toLocaleDateString("en-US", {
                    weekday: "short",
                  })}
                </p>
                <img
                  src={`https://openweathermap.org/img/wn/${item.weather[0].icon}.png`}
                  alt="forecast icon"
                  className="mx-auto"
                />
                <p className="font-bold">
                  {Math.round(item.main.temp_max)}°F /{" "}
                  {Math.round(item.main.temp_min)}°F
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="text-center p-10 text-xl text-white">
      <p className="text-2xl font-bold mb-2">Welcome to the Weather App!</p>
      <p>Search for a city to get the latest forecast.</p>
    </div>
  );
};

export default WeatherDisplay;
