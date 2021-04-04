import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
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
    </div>
  );
}
