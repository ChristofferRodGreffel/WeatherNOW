export default function WeatherCard(props) {
  return (
    <div className="weatherCard">
      <div className="section1">
        <h1>{props.city}</h1>
        <div>
          <img src={`https://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather icon" />
          <p className="temp">
            {props.temp}° <br /> {props.status}
          </p>
        </div>
      </div>
      <div className="section2">
        <div className="row">
          <p>Wind</p>
          <p>{props.wind} m/s</p>
        </div>
        <div className="row">
          <p>Humidity</p>
          <p>{props.humidity} %</p>
        </div>
        <div className="row">
          <p>Cloudiness</p>
          <p>{props.cloudiness} %</p>
        </div>
      </div>
    </div>
  );
}
