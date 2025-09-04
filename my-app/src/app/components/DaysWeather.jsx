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

                let nextDays = [];
                for (let i = 0; i < data.list.length; i++) {
                    if (nextDays.length === 5) break;
                    if (data.list[i].dt_txt.includes("00:00:00")) {
                        nextDays.push(data.list[i]);
                    }
                }

                setDailyData(nextDays);
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

    return (
        <div className="w-[95%] sm:w-[90%] m-auto mt-6 px-2">
            <h1 className="text-xl sm:text-2xl lg:text-3xl">5 days forecast</h1>
            <hr className="mt-2 mb-4" />

            <div className="bg-white border-dashed border-2 border-primary rounded-md shadow-md sm:p-4">
                <div className="hidden sm:flex sm:gap-4 justify-between pb-2 mb-4 text-lg sm:text-xl lg:text-2xl font-medium border-b pb-2 border-primary">
                    <h2 className="w-[33%] text-left text">Day</h2>
                    <h2 className="w-[33%] text-left text-text">
                        Condition
                    </h2>
                    <h2 className="w-[33%] text-left text-text">
                        High/Low
                    </h2>
                </div>

                <div className="flex flex-col gap-2 sm:gap-3">
                    {dailyData.map((next, index) => {
                        const date = new Date(next.dt_txt);
                        const dayName = date.toLocaleDateString("en-US", {
                            weekday: "long",
                        });

                        return (
                            <div
                                key={index}
                                className="rounded-md mt-3 transition-colors"
                            >

                                <div className="flex gap-2 sm:gap-4 justify-between items-center border-b border-dashed pb-2 border-primary">
                                    <p className="w-[33%] font-medium text-left text">
                                        {dayName}
                                    </p>
                                    <p className="w-[33%] text-left text-text capitalize">
                                        {next.weather[0].description}
                                    </p>
                                    <p className="w-[33%] text-primary text-left text-lg">
                                        {Math.round(next.main.temp_max)}°/
                                        {Math.round(next.main.temp_min)}°C
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default DaysWeather;
