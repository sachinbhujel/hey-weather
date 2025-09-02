import React, { useState, useEffect } from "react";
import { weatherData } from "@/data";

function HourlyWeather({ lat, lon, weatherDataAPI }) {
  const [hourlyData, setHourlyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

  useEffect(() => {
    if (!lat || !lon || !WEATHER_API_KEY) return;

    async function fetchHourlyData() {
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

        const nextHours = data.list.slice(0, 5).map((item) => {
          const temp = item.main.temp;

          const now = weatherDataAPI.dt;
          const sunrise = weatherDataAPI.sys?.sunrise;
          const sunset = weatherDataAPI.sys?.sunset;
          const isDay = now >= sunrise && now < sunset;

          let weatherImage = "";
          let weatherNote = "";

          for (let range in weatherData) {
            const lastDash = range.lastIndexOf("-");
            const min = Number(range.slice(0, lastDash));
            const max = Number(range.slice(lastDash + 1));

            if (temp >= min && temp <= max) {
              const weatherInfo = isDay
                ? weatherData[range].day
                : weatherData[range].night;

              weatherImage = weatherInfo.image;
              weatherNote = weatherInfo.note;
              break;
            }
          }

          return {
            temp,
            weatherImage,
            weatherNote,
            time: new Date(item.dt * 1000).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            }),
          };
        });

        setHourlyData(nextHours);
      } catch (err) {
        console.error("Error fetching hourly weather:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchHourlyData();
  }, [lat, lon, WEATHER_API_KEY]);

  if (!WEATHER_API_KEY) {
    return (
      <div>
        <h1>Weather Forecast</h1>
        <p>
          API key not found. Please set WEATHER_API_KEY in your environment.
        </p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <h1>Next 5 Forecasts (3-hour intervals)</h1>
        <p>Loading weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Next 5 Forecasts (3-hour intervals)</h1>
        <p>Error loading weather data: {error}</p>
      </div>
    );
  }

  return (
    <div className="w-[90%] border bg-red-300 m-auto mt-6">
      <h1 className="text-2xl">Next 5 Forecasts (3-hour intervals)</h1>
      <hr className="mt-2" />
      <div className="flex gap-8 mt-6">
        {hourlyData.map((hour, index) => (
          <div
            key={index}
            className={`border sm:w-[20%] rotate-${(index % 4) * 3}`}
          >
            <div className="bg-white shadow-lg p-3 border w-40 pb-10 h-50 ">
              {hour.weatherImage && (
                <img
                  src={hour.weatherImage}
                  alt={hour.weatherNote}
                  className="object-cover h-30 w-full"
                />
              )}
              <div className="flex gap-1 justify-center items-center mt-3">
                <p>{hour.time}</p>
                <p>-</p>
                <p>{hour.temp}°C</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HourlyWeather;
