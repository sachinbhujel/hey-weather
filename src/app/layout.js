/* eslint-disable @next/next/no-page-custom-font */
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata = {
    title: "HeyWeather | Minimal & modern weather app",
    icons: {
        icon: [{ url: "/favicon.ico" }],
    },
    description:
        "HeyWeather is a minimal and modern weather app, unique for its multiple theme options and clean, easy-to-read UI.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <meta
                    property="og:title"
                    content="HeyWeather | Minimal & modern weather app"
                />
                <meta
                    property="og:description"
                    content="HeyWeather is a minimal and modern weather app, unique for its multiple theme options and clean, easy-to-read UI."
                />
                <meta property="og:image" content="/hey-weather-theme1.png" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Rethink+Sans:ital,wght@0,400..800;1,400..800&display=swap"
                />
                <script defer src="https://cloud.umami.is/script.js" data-website-id="79a43f79-5dfa-4191-a306-5eef21a65d1a"></script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <div className="p-2">
                    <Navbar />
                    {children}
                                <Footer />
                </div>
            </body>
        </html>
    );
}
