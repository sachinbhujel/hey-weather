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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="border"
          value={city}
          placeholder="enter a city"
          onChange={(e) => setCity(e.target.value)}
          required
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default Search;
