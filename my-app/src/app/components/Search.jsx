import React from "react";

function Search({ setCity, city, setWeatherDataAPI }) {
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        console.log(data);
        setWeatherDataAPI(data);
    };

    return (
        <div className="flex w-[90%] sm:w-[70%] justify-center m-auto mt-6">
            <form
                onSubmit={handleSubmit}
                className="flex border justify-between w-full items-center gap-1 rounded-full p-2"
            >
                <input
                    type="text"
                    className="w-full p-1 outline-none text-text placeholder-text"
                    value={city}
                    placeholder="Search location"
                    onChange={(e) => setCity(e.target.value)}
                    required
                />
                <div className="rounded-lg bg-background p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide cursor-pointer lucide-search-icon lucide-search text-accent"
                    >
                        <path d="m21 21-4.34-4.34" />
                        <circle cx="11" cy="11" r="8" />
                    </svg>
                </div>
            </form>
        </div>
    );
}

export default Search;
