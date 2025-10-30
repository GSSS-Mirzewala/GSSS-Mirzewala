// Dependencies (Block)
import { createContext } from "react";

// Variables
const date = new Date();

const MONTHS = [
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

const DAYS = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDateSuffix(date) {
  let sfx = null;
  const x = Number(
    date
      .getDate()
      .toString()
      .slice(date.getDate().toString().length - 1)
  );
  if (x === 1) {
    sfx = "st";
  } else if (x === 2) {
    sfx = "nd";
  } else if (x === 3) {
    sfx = "rd";
  } else {
    sfx = "th";
  }
  return sfx;
}

const STATE = {
  DATE: date.getDate(), // e.g. 25
  DATE_SUFFIX: getDateSuffix(date), // e.g. 21st, 22nd, 23rd & 24th
  DAY: date.getDay(),
  FULL_DAY_NAME: DAYS[date.getDay()],
  SHORT_DAY_NAME: DAYS[date.getDay()].slice(0, 3) + ".",
  MONTH: date.getMonth() + 1, // e.g. 1
  SHORT_MONTH_NAME: MONTHS[date.getMonth()].slice(0, 3) + ".", // e.g. Jan.
  FULL_MONTH_NAME: MONTHS[date.getMonth()], // e.g. January
  SHORT_YEAR: Number(date.getFullYear().toString().slice(2, 4)), // e.g. 26
  FULL_YEAR: date.getFullYear(), // e.g. 2026
  Hours_24: date.getHours(), // e.g 18
  AM_PM: date.getHours() >= 12 ? "PM" : "AM", // e.g. AM or PM
};

// Create Context (Block)
const CalContext = createContext();

// Provider (Block)
export const CalProvider = ({ children }) => {
  return <CalContext.Provider value={STATE}>{children}</CalContext.Provider>;
};

// Exportion (Block)
export default CalContext;
