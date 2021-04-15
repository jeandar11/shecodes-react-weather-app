import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function DayForecast(props) {
  function displayDay() {
    const dayIndex = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(props.data.dt * 1000);
    const day = dayIndex[date.getDay()];

    return day;
  }

  return (
    <div className="card">
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} />
        <h6 className="card-title">{displayDay()}</h6>
        <p className="card-text">
          <strong> {Math.round(props.data.temp.max)}°</strong>{" "}
          {Math.round(props.data.temp.min)}°
        </p>
      </div>
    </div>
  );
}
