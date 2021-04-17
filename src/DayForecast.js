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

  function maxTemp() {
    let maxTemp = Math.round(props.data.temp.max);
    if (props.unit !== "celsius") {
      maxTemp = Math.round((maxTemp * 9) / 5 + 32);
    }
    return `${maxTemp}°`;
  }

  function minTemp() {
    let minTemp = Math.round(props.data.temp.min);
    if (props.unit !== "celsius") {
      minTemp = Math.round((minTemp * 9) / 5 + 32);
    }
    return `${minTemp}°`;
  }

  return (
    <div className="card">
      <div className="card-body">
        <WeatherIcon code={props.data.weather[0].icon} />
        <h6 className="card-title">{displayDay()}</h6>
        <p className="card-text">
          <strong> {maxTemp()}</strong> {minTemp()}
        </p>
      </div>
    </div>
  );
}
