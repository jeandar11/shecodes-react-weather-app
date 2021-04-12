import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: `Tuesday 9 March`,
      time: `09:15`,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
    });
  }

  if (weatherData.ready) {
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
              <h1 id="city">{weatherData.name}</h1>
              <h2 id="local-date">{weatherData.date}</h2>
              <h2 id="local-time">{weatherData.time}</h2>
              <h3 id="weather-description">{weatherData.description}</h3>
              <h4 id="humidity">Humidity: {weatherData.humidity}%</h4>
              <h4 id="wind-speed">
                Wind Speed: {Math.round(weatherData.wind * 3.6)} km/h
              </h4>
            </header>
          </div>
          <div className="col-sm-6">
            <div className="current-weather">
              <i id="weather-icon" className="fas fa-sun"></i>
              <div className="temperature">
                <span id="local-temperature">
                  {Math.round(weatherData.temperature)}
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
  } else {
    const apiKey = `ad622807fe4c3200a769fc5c6243ae00`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  return <h2>Loading...</h2>;
}
