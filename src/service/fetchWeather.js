const ApiKey = "acb1a0293a20e584ecd16aa41f88ec77";

const getWeather = async (cityName) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${ApiKey}`;

  const response = await fetch(url);
  const location = await response.json();

  if (location.length == 0) {
    return null;
  }

  const result = await fetchWeather(location);

  return result;
};

const fetchWeather = async (data) => {
  const lon = data[0].lon;
  const lat = data[0].lat;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${ApiKey}&units=metric`;

  const response = await fetch(url);
  const weather = response.json();
  return weather;
};

export default getWeather;
