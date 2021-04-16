import React from "react";

export default function LocalDate(props) {
  const now = new Date(props.date);
  const localDate = now.getTime();
  const timezoneOffset = now.getTimezoneOffset() * 60000;
  const location = localDate + timezoneOffset + 1000 * props.timezone;

  function formatDate(location) {
    const now = new Date(location);
    const dayIndex = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const monthIndex = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const day = dayIndex[now.getDay()];
    const date = now.getDate();
    const month = monthIndex[now.getMonth()];

    return (
      <div>
        {day} {date} {month}
      </div>
    );
  }

  return formatDate(location);
}
