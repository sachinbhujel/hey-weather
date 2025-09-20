"use client";

import React, { useRef, useState } from "react";
import { cities } from "@/data";

function Search({ setCity }) {
    const inputRef = useRef();
    const [suggestions, setSuggestions] = useState([]);
    const [cityErrMsg, setCityErrMsg] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (inputRef.current.value.trim()) {
            setCity(inputRef.current.value.trim());
            setSuggestions([]);
        }
    };

    const handleSelect = (city) => {
        setCityErrMsg(false);
        setCity(city);
        inputRef.current.value = city;
        setSuggestions([]);
    };

    const handleChange = () => {
        const value = inputRef.current.value.trim().toLowerCase();
        if (value) {
            const filtered = cities.filter((city) =>
                city.toLowerCase().startsWith(value)
            );
            const slicedFiltered = filtered.slice(0, 12);
            if (slicedFiltered.length === 0) {
                setCityErrMsg(true);
            }
            setSuggestions(slicedFiltered);
        } else {
            setSuggestions([]);
        }
    };

    return (
        <div className="flex w-[80%] sm:w-[60%] justify-center m-auto mt-6 relative">
            <form
                onSubmit={handleSubmit}
                className="border-2 border-primary rounded-3xl flex justify-between w-full items-center gap-1 p-2 pl-4"
            >
                <input
                    type="text"
                    className="text-primary placeholder-primary w-full p-1 outline-none"
                    placeholder="Enter location"
                    ref={inputRef}
                    onChange={handleChange}
                    required
                />
                <button
                    type="submit"
                    className="rounded-r-full bg-secondary/60 text-primary hover:bg-primary hover:text-secondary h-full w-12 pl-1 pr-2 flex justify-center items-center cursor-pointer"
                >
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
                        className="lucide lucide-search"
                    >
                        <path d="m21 21-4.34-4.34" />
                        <circle cx="11" cy="11" r="8" />
                    </svg>
                </button>
            </form>

            {suggestions.length > 0 ? (
                <ul className="custom-scrollbar absolute top-full left-0 mt-2 w-[100%] bg-background h-50 overflow-auto border border-primary rounded-lg z-10">
                    {suggestions.map((city, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(city)}
                            className="hover:bg-secondary/60 p-2 cursor-pointer text-primary"
                        >
                            {city}
                        </li>
                    ))}
                </ul>
            ) : (
                cityErrMsg && (
                    <div className="custom-scrollbar text-primary absolute top-full left-0 mt-2 w-[100%] bg-background h-50 overflow-auto border border-primary rounded-lg z-10 flex flex-col justify-center items-center p-2">
                        <p className="font-medium text-lg text-center">
                            City is not available in my search data.
                        </p>
                        <p className="text-center"> But, you can still search for it.</p>
                    </div>
                )
            )}
        </div>
    );
}

export default Search;
