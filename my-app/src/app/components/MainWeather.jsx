"use client";

import React, { useState, useEffect } from "react";
import Search from "./Search";
import { weatherData } from "@/data";

function MainWeather() {
  const [weatherDataAPI, setWeatherDataAPI] = useState(null);
  const [weatherNote, setWeatherNote] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [city, setCity] = useState("");

  useEffect(() => {
    if (!weatherDataAPI) return;

    const temp = weatherDataAPI.main?.temp;

    for (let range in weatherData) {
      const lastDash = range.lastIndexOf("-");
      const min = Number(range.slice(0, lastDash));
      const max = Number(range.slice(lastDash + 1));

      if (temp >= min && temp <= max) {
        setWeatherNote(weatherData[range].note);
        setWeatherImg(weatherData[range].image);
        break;
      }
    }
  }, [weatherDataAPI]);

  return (
    <div>
      <Search
        setCity={setCity}
        city={city}
        setWeatherDataAPI={setWeatherDataAPI}
      />
      <h1>Main Weather</h1>

      {weatherDataAPI ? (
        weatherDataAPI.name ? (
          <div>
            <p>City Name: {weatherDataAPI.name}</p>
            {weatherImg && (
              <img src={weatherImg} alt={weatherNote} width={200} />
            )}

            <p>Temperature: {weatherDataAPI.main?.temp}°C</p>
            <p>Humidity: {weatherDataAPI.main?.humidity}%</p>
            <p>
              Wind Speed: {Math.round(weatherDataAPI.wind?.speed * 3.6)} km/h
            </p>
            {weatherNote && <p>Note: {weatherNote}</p>}
          </div>
        ) : weatherDataAPI.code === 404 ? (
          <p>City not found</p>
        ) : (
          <p>No weather data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default MainWeather;
