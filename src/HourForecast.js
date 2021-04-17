import React from "react";
import WeatherIcon from "./WeatherIcon";
import LocalTime from "./LocalTime";

export default function HourForecast(props) {
  const time = new Date(props.data.dt * 1000);
  const timezone = props.timezone;

  function hourlyTemp() {
    let hourlyTemp = Math.round(props.data.temp);
    if (props.unit !== "celsius") {
      hourlyTemp = Math.round((hourlyTemp * 9) / 5 + 32);
    }
    return `${hourlyTemp}°`;
  }

  return (
    <div className="card">
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} />
        <h6 className="card-title">
          <LocalTime time={time} timezone={timezone} />{" "}
        </h6>
        <p className="card-text">
          <strong id="hourly-temp"> {hourlyTemp()}</strong>
        </p>
      </div>
    </div>
  );
}
