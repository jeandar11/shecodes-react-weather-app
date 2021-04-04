import React from "react";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row" id="daily-forecast">
        <div className="col-sm-3">
          <div className="card">
            <div className="card-body">
              <i className="fas fa-sun"></i>
              <h6 className="card-title">Wednesday</h6>
              <p className="card-text">
                <strong> 6°</strong> -2°
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
