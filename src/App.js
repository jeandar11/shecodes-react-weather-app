import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch.js";
import HourlyForecast from "./HourlyForecast.js";
import DailyForecast from "./DailyForecast.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div id="main-app">
          <WeatherSearch defaultCity="Montreal" />
          <HourlyForecast />
          <DailyForecast />
        </div>
        <small id="github-link">
          <a
            href="https://github.com/jeandar11/shecodes-react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code{" "}
          </a>
          by Jeanne Darcel thanks to{" "}
          <a href="https://shecodes.io" target="_blank" rel="noreferrer">
            SheCodes
          </a>{" "}
          👩‍💻
        </small>
      </div>
    </div>
  );
}
