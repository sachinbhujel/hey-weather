"use client";

import React, { useState, useEffect } from "react";

function DaysWeather({ city }) {
    const [dailyData, setDailyData] = useState([]);
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    useEffect(() => {
        if (!city) return;

        async function fetchDailyData() {
            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
                );

                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }

                const data = await res.json();

                let nextDays = [];
                for (let i = 0; i < data.list.length; i++) {
                    if (nextDays.length >= 5) break;
                    if (data.list[i].dt_txt.includes("00:00:00")) {
                        nextDays.push(data.list[i]);
                    }
                }

                setDailyData(nextDays);
                console.log(nextDays);
            } catch (error) {
                console.error("Error fetching daily weather:", error);
            }
        }

        fetchDailyData();
    }, [city]);

    return (
        <div className="w-[95%] sm:w-[90%] m-auto mt-6 px-2">
            <h1 className="text-primary sm:text-3xl text-2xl font-bold">Daily forecast</h1>
            <hr className="border-primary mt-2 mb-4" />

            <div className="bg-secondary/60 border-primary border-dashed border-2 rounded-md shadow-md p-4">
                <div className="border-primary hidden text-primary sm:flex justify-between mb-4 text-2xl font-bold border-b-2 border-dashed pb-2">
                    <h2 className="w-[33.3%] text-left">Day</h2>
                    <h2 className="w-[33.3%] text-left">
                        Condition
                    </h2>
                    <h2 className="w-[33.3%] text-left">
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
                                className="rounded-md transition-colors"
                            >

                                <div className="text-primary sm:flex sm:justify-between sm:items-center border-b border-dashed border-primary sm:text-xl">
                                    <p className="sm:w-[33%] font-medium text-left text-2xl">
                                        {dayName}
                                    </p>
                                    <p className="text-lg sm:w-[33%] capitalize">
                                        {next.weather[0].description}
                                    </p>
                                    <p className="sm:w-[33%] text-left font-semibold italic text-xl mb-2">
                                        {next.main.temp_max}°/
                                        {next.main.temp_min}°C
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
