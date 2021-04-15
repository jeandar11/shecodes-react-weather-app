import React from "react";
import WeatherIcon from "./WeatherIcon";
import FormattedTime from "./FormattedTime";

export default function HourForecast(props) {
  const time = new Date(props.data.dt * 1000);
  return (
    <div className="card">
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} />
        <h6 className="card-title">
          <FormattedTime time={time} />{" "}
        </h6>
        <p className="card-text">
          <strong id="hourly-temp"> {Math.round(props.data.temp)}°</strong>
        </p>
      </div>
    </div>
  );
}
