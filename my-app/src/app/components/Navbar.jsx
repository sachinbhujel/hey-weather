"use client";

import React, { useState } from "react";

function Navbar() {
    const [themeShow, setThemeShow] = useState(false);

    const handleTheme = (themeName) => {
        document.documentElement.classList = themeName;
    };

    const handleArrow = () => {
        setThemeShow(!themeShow);
    }

    return (
        <div className="bg-secondary/60 border-primary shadow-md flex items-center justify-between border-2 px-4 py-2 w-[100%] sm:w-[90%] rounded-xl m-auto">
            <div className="flex items-center gap-1">
                <h1 className="text-xl text-text font-semibold">Weather</h1>
            </div>
            <div className="flex items-center gap-2">
                <div className="relative inline-flex">
                    <span
                        className="border-primary inline-flex divide-x divide-primary/30 overflow-hidden rounded border border-primary shadow-sm"
                    >
                        <button
                            type="button"
                            className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-primary hover:text-secondary focus:relative"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-palette-icon lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /></svg>
                            <p className="text-sm">Themes</p>
                        </button>

                        <button
                            type="button"
                            className="cursor-pointer px-3 py-2 text-sm font-medium text-text transition-colors hover:bg-primary hover:text-secondary focus:relative"
                            aria-label="Menu"
                            onClick={handleArrow}
                        >
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
                        </button>
                    </span>

                    {themeShow && (
                        <div
                            role="menu"
                            className="bg-background absolute end-0 top-12 w-56 overflow-hidden rounded border border-primary shadow-sm"
                        >
                            <div>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text"
                                    role="menuitem"
                                    onClick={() => handleTheme("light")}
                                >
                                    Default
                                </a>

                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("blueish")}
                                >
                                    Blueish
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("t3")}
                                >
                                    Pinkish
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("sandstone")}
                                >
                                    Sandstone
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("pink-neon")}
                                >
                                    Pink Neon
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("green-neon")}
                                >
                                    Green Neon
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("pastel-breeze")}
                                >
                                    Pastel Breeze
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("candy-sky")}
                                >
                                    Candy Sky
                                </a>
                                <a
                                    href="#"
                                    className="hover:bg-primary hover:text-secondary block px-3 py-2 text-sm font-medium text-text transition-colors"
                                    role="menuitem"
                                    onClick={() => handleTheme("choco")}
                                >
                                    Choco
                                </a>
                            </div>
                        </div>
                    )}
                </div>
                <div className="hover:text-secondary hover:bg-primary rounded-full border-[1.5px] border-primary p-2 cursor-pointer">
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
            </div>
        </div>
    );
}

export default Navbar;
