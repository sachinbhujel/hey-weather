"use client";

import React, { useState, useEffect } from "react";
import Search from "./Search";
import { weatherData } from "@/data";
import HourlyWeather from "./HourlyWeather";
import DaysWeather from "./DaysWeather";

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

      {weatherDataAPI ? (
        weatherDataAPI.name ? (
          <div className="flex flex-col gap-10">
            <div className="mt-6 p-4 border m-auto flex flex-col sm:flex-row justify-center sm:gap-6 gap-10 items-center w-[90%] sm:items-start">
              <div className="bg-white shadow-lg p-3 rotate-[-2deg] w-full sm:w-[50%] pb-10">
                {weatherImg && (
                  <img
                    src={weatherImg}
                    alt={weatherNote}
                    className="sm:w-[100%] w-full h-[340px] object-cover"
                  />
                )}
                <p className="text-center mt-2">
                  {weatherDataAPI.name}, {weatherDataAPI.sys?.country}
                </p>
              </div>

              {weatherNote && (
                <div className="bg-yellow-200 shadow-md p-4 sm:w-[35%] w-full sm:rotate-2 rotate-1 relative h-max">
                  <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 w-[60px] h-[15px] bg-yellow-100"></div>
                  <h1 className="text-2xl mb-2">Right Now:</h1>
                  <p className="">{weatherNote}</p>
                </div>
              )}
            </div>
            <div className="flex sm:flex-row flex-col justify-between border w-[90%] justify-center m-auto gap-4">
              <div className="sm:w-[33.3%] w-full border p-2 flex flex-col items-center gap-4">
                <h1 className="text-lg">Temperature</h1>
                <p className="text-2xl">{weatherDataAPI.main?.temp}°C</p>
              </div>
              <div className="sm:w-[33.3%] w-full border p-2 flex flex-col items-center gap-4">
                <h1 className="text-lg">Humidity</h1>
                <p className="text-2xl">{weatherDataAPI.main?.humidity}%</p>
              </div>
              <div className="sm:w-[33.3%] w-full border p-2 flex flex-col items-center gap-4">
                <h1 className="text-lg">Wind Speed</h1>
                <p className="text-2xl">
                  {Math.round(weatherDataAPI.wind?.speed * 3.6)} km/h
                </p>
              </div>
            </div>
          </div>
        ) : weatherDataAPI.code === 404 ? (
          <p>City not found</p>
        ) : (
          <p>No weather data available</p>
        )
      ) : (
        <p>Loading...</p>
      )}

      {weatherDataAPI?.coord && (
        <>
          <HourlyWeather
            lat={weatherDataAPI.coord.lat}
            lon={weatherDataAPI.coord.lon}
            weatherDataAPI={weatherDataAPI}
          />
          <DaysWeather
            lat={weatherDataAPI.coord.lat}
            lon={weatherDataAPI.coord.lon}
            weatherDataAPI={weatherDataAPI}
          />
        </>
      )}
    </div>
  );
}

export default MainWeather;
