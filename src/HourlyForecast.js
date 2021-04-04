import React from "react";
import "./HourlyForecast.css";

export default function HourlyForecast() {
  return (
    <div className="HourlyForecast">
      <div className="row" id="hourly-forecast">
        <div className="col-sm-2">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-cloud"></i>
              <h6 className="card-title">10:00</h6>
              <p className="card-text">
                <strong id="hourly-temp"> 4°</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
