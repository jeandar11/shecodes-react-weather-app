import React from "react";

export default function LocalTime(props) {
  const now = new Date(props.time);
  const localTime = now.getTime();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const location = localTime + timezoneOffset + 1000 * props.timezone;

  function formatTime(location) {
    const now = new Date(location);
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return (
      <div>
        {hours}:{minutes}
      </div>
    );
  }

  return formatTime(location);
}
