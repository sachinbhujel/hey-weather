import React, { useState, useEffect } from "react";
import { weatherInfo } from "@/data";

function HourlyWeather({ city }) {
    const [weather, setWeather] = useState("");
    const [isDayOrNight, setIsDayOrNight] = useState([]);
    const dayTime = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
    const nightTime = ["20", "21", "22", "23", "24", "1", "2", "3", "4", "5"];
    const [nextThreeHours, setNextThreeHours] = useState([]);
    const [timeAndImage, setTimeAndImage] = useState([]);

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

                const sliced = data.list.slice(0, 6);
                setNextThreeHours(sliced);

                console.log("Hourly Data", data);
            } catch (err) {
                console.error("Error fetching hourly weather:", err);
            }
        }

        fetchHourlyData();
    }, [city]);

    useEffect(() => {
        if (weather) {
            nextThreeHours.map((hour) => {
                const temp = hour.main.temp;
                const now = hour.dt;
                const nowDate = new Date(now * 1000);
                let timeString = nowDate.toLocaleTimeString("en-US", {hour12: true});
                alert(timeString);
                let newNowDate = nowDate.toLocaleTimeString().split(":")[0];
                let amOrPm = nowDate.toLocaleTimeString().split(" ")[1];
                if (amOrPm === "PM" && newNowDate > 12) {
                    newNowDate += 0;
                } else if (amOrPm === "PM") {
                    newNowDate = String(parseInt(newNowDate) + 12);
                }

                if (dayTime.includes(newNowDate)) {
                    setIsDayOrNight(prev =>
                        [...prev, "Day"]
                    );
                    for (let range in weatherInfo) {
                        const lastDash = range.lastIndexOf("-");
                        const min = Number(range.slice(0, lastDash));
                        const max = Number(range.slice(lastDash + 1));

                        if (temp >= min && temp <= max) {
                            setTimeAndImage((prev) => [...prev, {
                                time: newNowDate > 12 ? newNowDate - 12 : newNowDate,
                                image: weatherInfo[range].day,
                                amOrPm: amOrPm
                            }])
                            break;
                        }
                    }
                } else {
                    setIsDayOrNight(prev =>
                        [...prev, "Night"]
                    );
                    for (let range in weatherInfo) {
                        const lastDash = range.lastIndexOf("-");
                        const min = Number(range.slice(0, lastDash));
                        const max = Number(range.slice(lastDash + 1));

                        if (temp >= min && temp <= max) {
                            setTimeAndImage((prev) => [...prev, {
                                time: newNowDate > 12 ? newNowDate - 12 : newNowDate,
                                image: weatherInfo[range].night,
                                amOrPm: amOrPm
                            }])
                            break;
                        }
                    }
                }
            })
        }
    }, [weather])


    return (
        <div className="w-[90%] m-auto mt-6 pb-4">
            <h1 className="text-primary sm:text-3xl text-2xl font-bold">
                Hourly Forecast
            </h1>
            <hr className="border-primary mt-2 mb-5" />
            <div className="grid grid-cols-3 md:grid-cols-6 m-auto w-full place-items-center md:gap-10 sm:gap-8 gap-6">
                {nextThreeHours && (
                    nextThreeHours.map((w, index) => (
                        <div key={index}>
                            <div className={`shadow-lg shadow-accent ${index % 2 === 0 ? "rotate-3" : "-rotate-3"} border-primary border-2 md:h-50 md:w-32 sm:w-30 w-23 h-36 sm:h-45 gap-2 sm:p-2 p-1 cursor-pointer flex flex-col`}>
                                <img
                                    src={timeAndImage[index]?.image?.image}
                                    alt="x"
                                    className="bg-black border-primary border-2 md:h-32 sm:h-26 h-22 w-[100%] object-cover"
                                />

                                <div className="text-primary flex flex-col justify-center items-center">
                                    <p className="text-xs sm:text-sm">{`${timeAndImage[index]?.time} ${timeAndImage[index]?.amOrPm}`}</p>
                                    <p className="font-bold text-sm sm:text-base">{w.main.temp}°C</p>
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
