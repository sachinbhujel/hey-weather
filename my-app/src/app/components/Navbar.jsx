"use client";

import React from "react";

function Navbar() {
    return (
        <div className="bg-secondary border-primary shadow-md flex items-center justify-between border-2 px-4 py-2 w-[100%] sm:w-[90%] rounded-xl m-auto">
            <div className="flex items-center gap-1">
                <h1 className="text-xl text-text font-semibold">Weather</h1>
            </div>
            <div className="hover:text-secondary hover:bg-primary rounded-lg border-[1.5px] border-primary p-2 cursor-pointer">
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
    );
}

export default Navbar;
