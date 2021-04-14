import React from "react";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-sm-6">
          <header>
            <h1>{props.data.name}</h1>
            <h2>
              <FormattedDate date={props.data.date} />
            </h2>
            <h2>
              <FormattedTime time={props.data.time} />
            </h2>
            <h3>{props.data.description}</h3>
            <h4>Humidity: {props.data.humidity}%</h4>
            <h4>Wind Speed: {Math.round(props.data.wind * 3.6)} km/h</h4>
          </header>
        </div>
        <div className="col-sm-6">
          <div className="current-weather">
            <WeatherIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}
