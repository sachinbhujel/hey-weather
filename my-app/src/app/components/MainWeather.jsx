"use client";

import React, { useState, useEffect } from "react";
import Search from "./Search";
import { weatherData } from "@/data";
import HourlyWeather from "./HourlyWeather";

function MainWeather() {
  const [weatherDataAPI, setWeatherDataAPI] = useState(null);
  const [weatherNote, setWeatherNote] = useState("");
  const [weatherImg, setWeatherImg] = useState("");
  const [city, setCity] = useState("");

  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    if (city) return;

    async function fetchIP() {
      try {
        const res = await fetch("https://ipapi.co/json/");
        const ipData = await res.json();
        const userCity = ipData.city;

        if (userCity) {
          const weatherRes = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&appid=${WEATHER_API_KEY}&units=metric`
          );
          const weather = await weatherRes.json();
          setWeatherDataAPI(weather);
        }
      } catch (error) {
        console.log("IP location fetch failed:", error);
      }
    }

    fetchIP();
  }, [city, WEATHER_API_KEY]);

  useEffect(() => {
    if (!weatherDataAPI) return;

    const temp = weatherDataAPI.main?.temp;

    const now = weatherDataAPI.dt;
    const sunrise = weatherDataAPI.sys?.sunrise;
    const sunset = weatherDataAPI.sys?.sunset;
    const isDay = now >= sunrise && now < sunset;

    for (let range in weatherData) {
      const lastDash = range.lastIndexOf("-");
      const min = Number(range.slice(0, lastDash));
      const max = Number(range.slice(lastDash + 1));

      if (temp >= min && temp <= max) {
        const weatherInfo = isDay
          ? weatherData[range].day
          : weatherData[range].night;

        setWeatherNote(weatherInfo.note);
        setWeatherImg(weatherInfo.image);
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
            {weatherNote && <p>Note: {weatherNote}</p>}
            <p>Temperature: {weatherDataAPI.main?.temp}°C</p>
            <p>Humidity: {weatherDataAPI.main?.humidity}%</p>
            <p>
              Wind Speed: {Math.round(weatherDataAPI.wind?.speed * 3.6)} km/h
            </p>
          </div>
        ) : weatherDataAPI.code === 404 ? (
          <p>City not found</p>
        ) : (
          <p>No weather data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}

      {weatherDataAPI && weatherDataAPI.coord && (
        <HourlyWeather
          lat={weatherDataAPI.coord.lat}
          lon={weatherDataAPI.coord.lon}
          weatherDataAPI={weatherDataAPI}
        />
      )}
    </div>
  );
}

export default MainWeather;
