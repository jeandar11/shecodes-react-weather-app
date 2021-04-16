import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast.js";
import Loader from "react-loader-spinner";

export default function WeatherSearch(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      name: response.data.name,
      date: response.data.dt * 1000,
      time: response.data.dt * 1000,
      timezone: response.data.timezone,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      coordinates: response.data.coord,
    });
  }

  function searchCity() {
    const apiKey = `ad622807fe4c3200a769fc5c6243ae00`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchCity();
  }

  function getCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="WeatherSearch">
        <form onSubmit={handleSubmit}>
          <div className="search-engine">
            <input
              type="text"
              className="form-control"
              placeholder="Enter your city here..."
              autoFocus="on"
              autoComplete="off"
              onChange={getCity}
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
        <WeatherInfo data={weatherData} />
        <Forecast coordinates={weatherData.coordinates} />
      </div>
    );
  } else {
    searchCity();
    return (
      <Loader
        type="ThreeDots"
        color="#000000"
        height={50}
        width={50}
        timeout={3000} //3 secs
      />
    );
  }
}
