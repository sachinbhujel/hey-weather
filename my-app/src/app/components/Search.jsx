import React from "react";

function Search({ setCityInput, cityInput }) {
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${WEATHER_API_KEY}&units=metric`
        );
        const data = await res.json();
        console.log("Search Data", data);
    };

    return (
        <div className="flex w-[70%] sm:w-[50%] justify-center m-auto mt-6">
            <form
                onSubmit={handleSubmit}
                className="border-2 border-primary rounded-3xl flex justify-between w-full items-center gap-1 p-2 pl-4"
            >
                <input
                    type="text"
                    className="text-primary placeholder-primary w-full p-1 outline-none"
                    value={cityInput}
                    placeholder="Search location"
                    onChange={(e) => setCityInput(e.target.value)}
                    required
                />
                <div className="rounded-r-full bg-secondary text-primary h-full w-12 pl-1 pr-2 flex justify-center items-center cursor-pointer">
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
                        className="lucide lucide-search-icon lucide-search"
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
