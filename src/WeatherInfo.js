import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <header>
            <h1 id="city">{props.data.name}</h1>
            <h2 id="local-date">
              <FormattedDate date={props.data.date} />
            </h2>
            <h2 id="local-time">
              <FormattedTime time={props.data.time} />
            </h2>
            <h3 id="weather-description">{props.data.description}</h3>
            <h4 id="humidity">Humidity: {props.data.humidity}%</h4>
            <h4 id="wind-speed">
              Wind Speed: {Math.round(props.data.wind * 3.6)} km/h
            </h4>
          </header>
        </div>
        <div className="col-sm-6">
          <div className="current-weather">
            <i id="weather-icon" className="fas fa-sun"></i>
            <div className="temperature">
              <span id="local-temperature">
                {Math.round(props.data.temperature)}
              </span>
              <span className="units">
                <button id="celsius-link" className="active">
                  °C
                </button>{" "}
                |<button id="fahrenheit-link">°F</button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
