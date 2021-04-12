import React from "react";

export default function FormattedDate(props) {
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
  const day = dayIndex[props.date.getDay()];
  const date = props.date.getDate();
  const month = monthIndex[props.date.getMonth()];

  return (
    <div>
      {day} {date} {month}
    </div>
  );
}
