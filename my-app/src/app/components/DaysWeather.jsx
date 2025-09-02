"use client";

import React, { useState, useEffect } from "react";

function DaysWeather({ lat, lon, weatherDataAPI }) {
  const [dailyData, setDailyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    if (!lat || !lon || !WEATHER_API_KEY) return;

    async function fetchDailyData() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
        );

        if (!res.ok) {
          throw new Error(`API Error: ${res.status}`);
        }

        const data = await res.json();
        console.log(data);

        let nextDays = [];
        for (let i = 0; i < data.list.length; i++) {
          if (nextDays.length === 5) break;
          if (data.list[i].dt_txt.includes("00:00:00")) {
            nextDays.push(data.list[i]);
          }
        }

        console.log(nextDays);
      } catch (error) {
        console.error("Error fetching daily weather:", error);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDailyData();
  }, [lat, lon, WEATHER_API_KEY]);

  return <h1>5 days forecast</h1>;
}

export default DaysWeather;
