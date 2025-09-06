"use client";

import React, { useState, useEffect } from "react";
import MainWeather from "./components/MainWeather";
import HourlyWeather from "./components/HourlyWeather";
import DaysWeather from "./components/DaysWeather";
import Search from "./components/Search";

export default function Home() {
    const [city, setCity] = useState("");

    useEffect(() => {
        async function fetchIP() {
            try {
                const res = await fetch(
                    "https://ipinfo.io/json?token=d0666e8c70b5f8"
                );
                const ipData = await res.json();
                setCity(ipData.city);
            } catch (error) {
                console.log("IP location fetch failed:", error);
            }
        }

        fetchIP();
    }, []);

    return (
        <main>
            <Search city={city} setCity={setCity}/>
              {city && (
      <>
        <MainWeather city={city} />
        <HourlyWeather city={city} />
        <DaysWeather city={city} />
      </>
    )}
        </main>
    );
}
