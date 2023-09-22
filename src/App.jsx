import { useEffect, useState } from "react";
import getWeather from "./service/fetchWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const [weather, setWeather] = useState([]);
  const [weatherCheck, setWeatherCheck] = useState(false);
  const [cityFound, setCityFound] = useState(true);

  const searchWeather = async (city) => {
    const data = await getWeather(city);
    if (data != null) {
      setWeather(data);
      setWeatherCheck(true);
      setCityFound(true);
    } else {
      setCityFound(false);
    }
  };

  console.log(weather);

  return (
    <div className="content">
      <h1>Check the weather</h1>
      <SearchBar search={searchWeather} placeholder="Search for city" />

      {weatherCheck && (
        <WeatherCard
          city={weather.name}
          icon={weather.weather[0].icon}
          status={weather.weather[0].main}
          temp={weather.main.temp.toFixed(1)}
          wind={weather.wind.speed.toFixed(1)}
          humidity={weather.main.humidity}
          cloudiness={weather.clouds.all}
        />
      )}

      {!cityFound && <p id="notFound">City not found...</p>}
    </div>
  );
}
