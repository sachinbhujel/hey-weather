import React from "react";

function Search({ setCity, searchInput, setSearchInput }) {
    const WEATHER_API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;

    const handleSubmit = async (e) => {
        e.preventDefault();
        setCity(searchInput);
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
                    placeholder="Search location"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
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
        </div>
    );
}

export default Search;
