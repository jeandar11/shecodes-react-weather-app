import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Forecast.css";
import DayForecast from "./DayForecast";
import HourForecast from "./HourForecast";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [dailyForecast, setDailyForecast] = useState(null);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setDailyForecast(response.data.daily);
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        <div className="row" id="hourly-forecast">
          {hourlyForecast.map(function (hourlyForecast, index) {
            if (index > 0 && index < 7) {
              return (
                <div className="col-sm-2" key={index}>
                  <HourForecast data={hourlyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="row" id="daily-forecast">
          {dailyForecast.map(function (dailyForecast, index) {
            if (index > 0 && index < 5) {
              return (
                <div className="col-sm-3" key={index}>
                  <DayForecast data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    const apiKey = `ad622807fe4c3200a769fc5c6243ae00`;
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
