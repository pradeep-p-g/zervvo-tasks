import React, { useRef, useState } from "react";
import Search from "../components/search";
import WeatherCard from "../components/weather-card";
import Loading from "../components/loading";
import Error from "../components/error";

export default function WeatherDashboard() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState(null);
  const [loadingSuggestions, setLoadingSuggestions] = useState(false);
  const [loadingWeather, setLoadingWeather] = useState(false);
  const [error, setError] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const controllerRef = useRef(null);
  const WEATHER_API = import.meta.env.VITE_API_KEY;

  const showSuggestions = async (value) => {
    setLocation(value);

    if (!value) {
      setSuggestions([]);
      return;
    }

    if (value.length < 3) {
      setSuggestions([]);
      return;
    }

    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    try {
      setLoadingSuggestions(true);
      const geoRes = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value}&limit=5&appid=${WEATHER_API}`,
        { signal: controller.signal },
      );
      if (!geoRes.ok) {
        throw new Error("Error Fetching location");
      }

      const geoData = await geoRes.json();
      setSuggestions(geoData);
    } catch (err) {
      if (err.name !== "AbortError") {
        setError("Failed to load the location");
      }
    } finally {
      setLoadingSuggestions(false);
    }
  };

  const fetchWeather = async (city) => {
    try {
      setLoadingWeather(true);
      const weatherRes = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&appid=${WEATHER_API}`,
      );
      if (!weatherRes.ok) {
        throw new Error("Error fetching weather");
      }

      const weatherData = await weatherRes.json();
      setWeather(weatherData);

      setLocation(city.name);

      setSuggestions([]);
    } catch (err) {
      setError("Failed to load the weather");
    } finally {
      setLoadingWeather(false);
    }
  };

  if (loadingWeather) {
    return <Loading />;
  }

  if (error) {
    return <Error />;
  }

  return (
    <div className="max-w-md mx-auto">
      <div className="relative m-5 ">
        <div className="my-5 mx-5">
          <Search
            query={location}
            setQuery={(value) => showSuggestions(value)}
            placeholder="Search location"
          />
        </div>
        {suggestions.length > 0 && (
          <div className="absolute w-full bg-white border rounded-md shadow-md z-10">
            {suggestions.map((item, index) => (
              <div
                key={index}
                onClick={() => fetchWeather(item)}
                className="p-2 cursor-pointer hover:bg-gray-100"
              >
                {item.name}, {item.country}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="m-5">
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}
