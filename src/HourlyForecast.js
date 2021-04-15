import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HourlyForecast.css";
import HourForecast from "./HourForecast";

export default function HourlyForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [hourlyForecast, setHourlyForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setHourlyForecast(response.data.hourly);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="HourlyForecast">
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
