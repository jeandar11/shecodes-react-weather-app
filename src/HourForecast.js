import React from "react";
import WeatherIcon from "./WeatherIcon";
import LocalTime from "./LocalTime";

export default function HourForecast(props) {
  const time = new Date(props.data.dt * 1000);
  const timezone = props.timezone;

  return (
    <div className="card">
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} />
        <h6 className="card-title">
          <LocalTime time={time} timezone={timezone} />{" "}
        </h6>
        <p className="card-text">
          <strong id="hourly-temp"> {Math.round(props.data.temp)}°</strong>
        </p>
      </div>
    </div>
  );
}
