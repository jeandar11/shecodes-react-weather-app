import React from "react";

export default function WeatherTemperature(props) {
  function convertToFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  if (props.unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round(props.celsius)}
          <span className="units">
            °C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              °F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <div className="temperature">
          {Math.round((props.celsius * 9) / 5 + 32)}
          <span className="units">
            <a href="/" onClick={convertToCelsius}>
              °C
            </a>{" "}
            | °F
          </span>
        </div>
      </div>
    );
  }
}
