"use client";

import React, { useState, useEffect } from "react";

function DaysWeather({ city }) {
    const [nextDayWeather, setNextDayWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    useEffect(() => {
        if (!city) return;

        async function fetchDailyData() {
            try {
                const res = await fetch("/api/daily-weather", {
                    method: "POST",
                    body: JSON.stringify({ city }),
                    headers: { "Content-type": "application/json" },
                });

                const data = await res.json();

                if (res.ok) {
                    setLoading(false);
                } else {
                    setLoading(true);
                }

                let nextDays = [];
                for (let i = 0; i < data.list.length; i++) {
                    if (nextDays.length >= 5) break;
                    if (data.list[i].dt_txt.includes("00:00:00")) {
                        nextDays.push(data.list[i]);
                    }
                }

                setNextDayWeather(nextDays);
            } catch (error) {
                console.error("Error fetching daily weather:", error);
            }
        }

        fetchDailyData();
    }, [city]);

    return (
        <div className="w-[95%] sm:w-[90%] m-auto mt-6 px-2">
            <h1 className="text-primary sm:text-3xl text-2xl font-bold">
                Daily forecast
            </h1>
            <hr className="border-primary mt-2 mb-4" />

            {loading ? (
                <div
                    role="status"
                    className="flex items-center justify-center mt-20 sm:mt-30 mb-30 sm:mb-40 md:mb-50"
                >
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 animate-spin text-secondary fill-primary"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                            fill="currentColor"
                        />
                        <path
                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                            fill="currentFill"
                        />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            ) : (
                <div className="bg-secondary/60 border-primary border-dashed border-2 rounded-md shadow-md p-4">
                    <div className="border-primary hidden text-primary sm:flex justify-between mb-4 text-2xl font-bold border-b-2 border-dashed pb-2">
                        <h2 className="w-[33.3%] text-left">Day</h2>
                        <h2 className="w-[33.3%] text-left">Condition</h2>
                        <h2 className="w-[33.3%] text-left">High/Low</h2>
                    </div>

                    <div className="flex flex-col gap-2 sm:gap-3">
                        {nextDayWeather.map((next, index) => {
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
            )}
        </div>
    );
}

export default DaysWeather;
