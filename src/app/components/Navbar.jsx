"use client";

import React, { useState } from "react";

function Navbar() {
    const [themeShow, setThemeShow] = useState(false);
    const [close, setClose] = useState(false);

    const handleTheme = (themeName) => {
        document.documentElement.classList = themeName;
    };

    const handleArrow = () => {
        setClose(!close);
        setThemeShow(!themeShow);
        document.getElementsByClassName("img-container")[0].style.zIndex = close ? ("0") : ("-1");
        document.getElementsByClassName("img-container")[1].style.zIndex = close ? ("0") : ("-1")
    }

    return (
        <div className="bg-secondary/60 border-primary shadow-md flex items-center justify-between border-2 px-4 py-2 w-[100%] sm:w-[90%] rounded-xl m-auto">

            <div className="flex items-center gap-1">
                <a href="/">
                    <h1 className="text-xl text-primary font-semibold"><span className="text-lg">hey</span>Weather</h1>
                </a>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative inline-flex text-primary">
                    <span
                        className="border-primary border inline-flex divide-x divide-primary/30 overflow-hidden rounded shadow-sm"
                    >
                        <button
                            type="button"
                            className="flex items-center gap-1 p-2 text-sm font-medium text-text transition-colors"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                            <p className="text-sm">Themes</p>
                        </button>

                        <button
                            type="button"
                            className="cursor-pointer p-2 text-sm font-medium text-text transition-colors hover:bg-primary hover:text-secondary focus:relative"
                            aria-label="Menu"
                            onClick={handleArrow}
                        >
                            {close ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="size-4"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                </svg>
                            )}

                        </button>
                    </span>

                    {themeShow && (
                        <div
                            role="menu"
                            className="bg-background absolute end-0 top-12 w-56 h-45 custom-scrollbar overflow-auto rounded border border-primary shadow-sm"
                        >
                            <div>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 w-full text-left text-sm font-medium text-text cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("light")}
                                >
                                    Default
                                </button>

                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("blueish")}
                                >
                                    Blueish
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("pinkish")}
                                >
                                    Pinkish
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("sandstone")}
                                >
                                    Sandstone
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("pink-neon")}
                                >
                                    Pink Neon
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer" 
                                    role="menuitem"
                                    onClick={() => handleTheme("green-neon")}
                                >
                                    Green Neon
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("pastel-breeze")}
                                >
                                    Pastel Breeze
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("candy-sky")}
                                >
                                    Candy Sky
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("choco")}
                                >
                                    Dark Cocoa
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer "
                                    role="menuitem"
                                    onClick={() => handleTheme("royal-eclipse")}
                                >
                                    Royal Eclipse
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("indigo-mist")}
                                >
                                    Indigo Mist
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("twilight-orchid")}
                                >
                                    Twilight Orchid
                                </button>
                                <button
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors w-full text-left cursor-pointer"
                                    role="menuitem"
                                    onClick={() => handleTheme("blue-neon")}
                                >
                                    Blue Neon
                                </button>
                            </div>
                        </div>
                    )}
                </div>
                <a href="https://github.com/sachinbhujel/hey-weather" target="_blank">
                    <div className="hover:text-secondary text-primary hover:bg-primary rounded-full border-[1.5px] border-primary p-2 cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-github-icon lucide-github"
                        >
                            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                            <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                    </div>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
