import React, { useState, useEffect } from "react";
import { weatherInfo } from "@/data";

function HourlyWeather({ city }) {
    const [weather, setWeather] = useState("");
    const dayTime = ["6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"];
    const [nextThreeHours, setNextThreeHours] = useState([]);
    const [timeAndImage, setTimeAndImage] = useState([]);
    const [loading, setLoading] = useState(false);

    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    useEffect(() => {
        async function fetchHourlyData() {
            if (!city) return;

            try {
                const res = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
                );

                if (!res.ok) {
                    setLoading(true);
                }

                const data = await res.json();
                setWeather(data);

                const sliced = data.list.slice(0, 6);
                setNextThreeHours(sliced);
            } catch (err) {
                console.error("Error fetching hourly weather:", err);
            }
        }

        fetchHourlyData();
    }, [city]);

    useEffect(() => {
        if (weather && nextThreeHours.length > 0) {
            let tempArr = [];

            nextThreeHours.map((hour) => {
                const temp = Math.round(hour.main.temp);

                const now = hour.dt;
                const nowDate = new Date(now * 1000);
                let timeString = nowDate.toLocaleTimeString("en-US", { hour12: true });
                let newNowDate = parseInt(timeString.split(":")[0]);
                let amOrPm = timeString.split(" ")[1];

                if (amOrPm === "PM" && newNowDate !== 12) {
                    newNowDate = newNowDate + 12;
                } else if (amOrPm === "AM" && newNowDate === 12) {
                    newNowDate = 0;
                }

                const isDay = dayTime.includes(String(newNowDate));
                let matchedImage = null;

                for (let range in weatherInfo) {
                    const lastDash = range.lastIndexOf("-");
                    const min = Number(range.slice(0, lastDash));
                    const max = Number(range.slice(lastDash + 1));

                    if (temp >= min && temp <= max) {
                        matchedImage = isDay ? weatherInfo[range].day : weatherInfo[range].night;
                        break;
                    }
                }

                tempArr.push({
                    time: newNowDate > 12 ? newNowDate - 12 : newNowDate === 0 ? 12 : newNowDate,
                    image: matchedImage,
                    amOrPm
                });
            });

            setTimeAndImage(tempArr);
        }
    }, [weather]);

    return (
        <div className="w-[90%] m-auto mt-6 pb-4">
            <h1 className="text-primary sm:text-3xl text-2xl font-bold">
                Hourly Forecast
            </h1>
            <hr className="border-primary mt-2 mb-5" />

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
                <div className="grid grid-cols-3 md:grid-cols-6 m-auto w-full place-items-center md:gap-10 sm:gap-8 gap-6">
                    {nextThreeHours && (
                        nextThreeHours.map((w, index) => (
                            <div key={index}>
                                <div className={`shadow-md shadow-accent ${index % 2 === 0 ? "rotate-3" : "-rotate-3"} hover:rotate-0 border-primary border-2 md:h-50 md:w-32 sm:w-30 w-23 h-36 sm:h-45 gap-2 sm:p-2 p-1 cursor-pointer flex flex-col`}>
                                    <img
                                        src={timeAndImage[index]?.image?.image}
                                        alt="x"
                                        className="bg-black md:h-32 sm:h-26 h-22 w-[100%] object-cover"
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
            )}
        </div>
    );
}

export default HourlyWeather;