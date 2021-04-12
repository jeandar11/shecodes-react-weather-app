import React from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form id="search-city-form">
        <div className="search-engine">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your city here..."
            autoFocus="on"
            autoComplete="off"
            id="city-input"
          />
        </div>
        <button type="submit" className="btn btn-outline-dark">
          <i className="fas fa-search"></i>
        </button>
        <button
          type="button"
          className="btn btn-outline-dark"
          id="current-position-button"
        >
          <i className="fas fa-map-marker-alt"></i>
        </button>
      </form>
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
