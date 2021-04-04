import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-sm-6">
          <header>
            <h1 id="city">Montreal</h1>
            <h2 id="local-date">Tuesday 9 March</h2>
            <h2 id="local-time">09:15</h2>
            <h3 id="weather-description">Clear Sky</h3>
            <h4 id="humidity">Humidity: 20%</h4>
            <h4 id="wind-speed">Wind Speed: 4 km/h</h4>
          </header>
        </div>

        <div className="col-sm-6">
          <div className="current-weather">
            <i id="weather-icon" className="fas fa-sun"></i>
            <div className="temperature">
              <span id="local-temperature">5</span>
              <span className="units">
                <a href="#" id="celsius-link" className="active">
                  °C
                </a>{" "}
                |
                <a href="#" id="fahrenheit-link">
                  °F
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
