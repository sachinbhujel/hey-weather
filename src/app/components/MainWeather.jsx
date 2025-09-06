"use client";

import React, { useState, useEffect } from "react";
import { weatherInfo } from "@/data";

function MainWeather({ city }) {
    const [weather, setWeather] = useState("");
    const [weatherImg, setWeatherImg] = useState(null);
    const [weatherNote, setWeatherNote] = useState("");


    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    useEffect(() => {
        async function fetchMainWeatherData() {
            try {

                const weatherRes = await fetch(
                    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
                );
                const weatherResponse = await weatherRes.json();
                setWeather(weatherResponse);

            } catch (error) {
                console.log("Error while fetching weather data.", error);
            }
        }

        fetchMainWeatherData();
    }, [city])

    useEffect(() => {
        if (!weather) return;

        const temp = weather.main?.temp;

        const now = weather.dt;
        const sunrise = weather.sys?.sunrise;
        const sunset = weather.sys?.sunset;

        const isDay = now >= sunrise && now < sunset;

        for (let range in weatherInfo) {
            const lastDash = range.lastIndexOf("-");
            const min = Number(range.slice(0, lastDash));
            const max = Number(range.slice(lastDash + 1));

            if (temp >= min && temp <= max) {
                const currentWeatherInfo = isDay
                    ? weatherInfo[range].day
                    : weatherInfo[range].night;

                setWeatherNote(currentWeatherInfo.note);
                setWeatherImg(currentWeatherInfo.image);
                break;
            }
        }
    }, [weather]);

    const category = [{
        name: "Humidity",
        value: `${weather.main?.humidity}%`
    }, {
        name: "Wind Speed",
        value: `${Math.round(weather.wind?.speed * 3.6)} km/h`
    },
    {
        name: "Feels Like",
        value: `${weather.main?.feels_like}°C`
    },
    {
        name: "Clouds",
        value: `${weather.clouds?.all}`
    }

    ];

    return (
        <>
            <div>
                {weather ? (
                    weather.name ? (
                        <div className="flex flex-col gap-8">
                            <div className="mt-8 sm:h-100 sm:p-4 m-auto flex sm:flex-row justify-center sm:gap-10 gap-6 items-center w-[100%] sm:w-[90%] sm:items-start">
                                <div className="bg-background border-primary border-2 rounded sm:h-full h-35 shadow-lg shadow-accent sm:p-3 sm:pb-8 pb-8 p-1 rotate-[-2deg] w-35 sm:w-[50%] -z-1">
                                    <img
                                        src={weatherImg}
                                        alt={weatherNote}
                                        className="w-full sm:h-[90%] h-full object-cover border-primary"
                                    />
                                    <p className="text-primary text-center sm:mt-2 mt-1 sm:text-xl text-sm font-semibold">
                                        {weather.name},{" "}
                                        {weather.sys?.country}
                                    </p>
                                </div>

                                <div className="flex flex-col sm:gap-8 gap-6 justify-around h-full -z-1">
                                    <div
                                        className="dark:bg-[#ffffd9] bg-#FFFFB8 shadow-md shadow-accent sm:p-4 p-2 sm:w-[260px] w-40 h-max sm:rotate-2 rotate-2 relative"
                                    >
                                        <div className="bg-primary absolute sm:top-[-11px] top-[-5px] left-1/2 -translate-x-1/2 sm:w-[80px] w-[40px] sm:h-[20px] h-[10px]"></div>
                                        <h3 className="text-accent font-medium sm:text-xl text-base mb-1 sm:mb-2">
                                            Temperature
                                        </h3>
                                        <p className="text-accent text-xl font-semibold sm:text-3xl">{weather.main?.temp}°C</p>
                                    </div>
                                    {weatherNote && (
                                        <div
                                            className="dark:bg-[#ffffd9] bg-#FFFFB8 shadow-md shadow-accent sm:p-4 p-2 sm:w-[260px] w-40 h-max sm:-rotate-2 -rotate-2 relative"
                                        >
                                            <div className="bg-primary absolute sm:top-[-11px] top-[-5px] left-1/2 -translate-x-1/2 sm:w-[80px] w-[40px] sm:h-[20px] h-[10px]"></div>
                                            <h3 className="text-accent font-medium sm:text-xl text-base sm:mb-2 mb-1">
                                                Right Now:
                                            </h3>
                                            <p className="text-accent text-sm sm:text-base">{weatherNote}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="grid sm:grid-cols-4 grid-cols-2 gap-2 place-items-center w-[90%] m-auto">

                                {category.map((cate, index) => (
                                    <div key={index} className="bg-secondary/60 w-[100%] sm:h-25 h-16 border-dashed border-primary border-2 rounded-lg p-2 flex flex-col items-center justify-center sm:gap-2">
                                        <h1 className="text-text sm:text-lg text-sm font-semibold text-center">
                                            {cate.name}
                                        </h1>
                                        <p className="text-primary sm:text-2xl text-xl text-center font-bold">
                                            {cate.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : weather.code === 404 ? (
                        <p>City not found</p>
                    ) : (
                        <p>No weather data available</p>
                    )
                ) : (
                    ""
                )}
            </div>
        </>
    );
}

export default MainWeather;
