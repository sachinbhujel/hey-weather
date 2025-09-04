import React, { useState, useEffect } from "react";
import { weatherInfo } from "@/data";

function HourlyWeather({ city }) {
    const [weather, setWeather] = useState("");
    const [isDayOrNight, setIsDayOrNight] = useState([]);
    const dayTime = ["7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
    const nightTime = ["20", "21", "22", "23", "24", "1", "2", "3", "4", "5", "6"];
    let nextThreeHours;

    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;


    useEffect(() => {
        async function fetchHourlyData() {
            if (!city) return;

            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
                );

                if (!res.ok) {
                    throw new Error(`API Error: ${res.status}`);
                }

                const data = await res.json();
                setWeather(data);
                console.log("Hourly Data", data);
            } catch (err) {
                console.error("Error fetching hourly weather:", err);
            }
        }

        fetchHourlyData();
    }, [city]);

    useEffect(() => {
        if (weather) {
            nextThreeHours = weather.list.slice(1, 7);

            nextThreeHours.map((hour) => {
                const now = hour.dt;
                const nowDate = new Date(now * 1000);
                let newNowDate = nowDate.toLocaleTimeString().split(":")[0];
                const amOrPm = nowDate.toLocaleTimeString().split(" ")[1];
                if (amOrPm === "PM") {
                    newNowDate = String(parseInt(newNowDate) + 12);
                }

                if (dayTime.includes(newNowDate)) {
                    setIsDayOrNight(prev =>
                        [...prev, "Day"]
                    );
                } else {
                    setIsDayOrNight(prev =>
                        [...prev, "Night"]
                    );
                }
            })
        }
    }, [weather])

    console.log(isDayOrNight)

    return (
        <div className="w-[90%] m-auto mt-6">
            <h1 className="sm:text-3xl text-2xl">
                Next 5 Forecasts (3-hour intervals)
            </h1>
            <hr className="mt-2 mb-5" />
            <div className="flex gap-10 overflow-x-auto">
                {nextThreeHours && (
                    nextThreeHours.map((weather, index) => (
                        <div key={index}>
                            <div className="border border-primary w-40 h-60 bg-white shadow-lg p-2 cursor-pointer">

                                <img
                                    src="x"
                                    alt="x"
                                    className="bg-black h-32 w-full object-cover"
                                />

                                <div className="flex justify-center gap-1 text-sm mt-3 text-primary">
                                    <p>{(() => {
                                        const time = parseInt(weather.dt_txt.slice(11, 13), 10);
                                        const hour = time > 12 ? time - 12 : time;
                                        const meridiem = time >= 12 ? "PM" : "AM";
                                        return `${hour} ${meridiem}`
                                    })()}</p>
                                    <p>-</p>
                                    <p>{weather.main.temp}°C</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
                }
            </div>
        </div>
    );
}

export default HourlyWeather;
