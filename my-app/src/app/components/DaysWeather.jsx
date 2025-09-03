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

            <div className="bg-primary shadow-md sm:p-4">
                <div className="hidden sm:flex sm:gap-4 justify-between pb-2 mb-4 text-lg sm:text-xl lg:text-2xl font-medium">
                    <h2 className="w-[33%] text-left text-background">Day</h2>
                    <h2 className="w-[33%] text-center text-background">
                        Condition
                    </h2>
                    <h2 className="w-[33%] text-right text-background">
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
                                className="rounded-md hover:bg-accent p-3 transition-colors"
                            >
                                <div className="sm:hidden">
                                    <div className="flex justify-between items-center mb-2">
                                        <h3 className="text-lg text-background">
                                            {dayName}
                                        </h3>
                                        <span className="text-lg text-secondary">
                                            {Math.round(next.main.temp_max)}°/
                                            {Math.round(next.main.temp_min)}°
                                        </span>
                                    </div>
                                    <p className="text-text">
                                        {next.weather[0].description}
                                    </p>
                                </div>

                                <div className="hidden sm:flex gap-2 sm:gap-4 justify-between items-center">
                                    <p className="w-[33%] font-medium text-left text-background">
                                        {dayName}
                                    </p>
                                    <p className="w-[33%] text-center text-background capitalize">
                                        {next.weather[0].description}
                                    </p>
                                    <p className="w-[33%] text-background text-right">
                                        {Math.round(next.main.temp_max)}°/
                                        {Math.round(next.main.temp_min)}°
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
