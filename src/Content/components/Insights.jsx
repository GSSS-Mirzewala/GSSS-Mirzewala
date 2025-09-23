import { useContext } from "react";
import { BASIC_PREFERENCES } from "../../Storage/PreferencesContext";

import styles from "../styles/Insights.module.css";

function Insights() {
  const useLanguage = useContext(BASIC_PREFERENCES);

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

  const DATES = [
    {
      DATE: 1,
      STATUS: "PRESENT",
    },
    {
      DATE: 2,
      STATUS: "PRESENT",
    },
    {
      DATE: 3,
      STATUS: "PRESENT",
    },
    {
      DATE: 4,
      STATUS: "PRESENT",
    },
    {
      DATE: 5,
      STATUS: "HOLIDAY",
    },
    {
      DATE: 6,
      STATUS: "ABSENT",
    },
    {
      DATE: 7,
      STATUS: "PRESENT",
    },
  ];

  function getColor(STATUS) {
    let color = null;
    if (STATUS === "PRESENT") {
      color = "#007736";
    } else if (STATUS === "ABSENT") {
      color = "#f71919";
    } else if (STATUS === "HOLIDAY") {
      color = "#FFA109";
    } else {
      color = "#000";
    }
    return color;
  }

  return (
    <div className="w-full bg-white py-4 px-6 rounded-sm">
      <h2 className="text-xl max-sm:text-xl font-semibold text-[#c0c0c0]">
        {useLanguage === "hi" ? "उपस्थिति विवरण " : "Yours Insights "}(
        {MONTHS[date.getMonth()]})
      </h2>
      <div className={styles.DatesContainer}>
        {DATES.map((DATE) => {
          let COLOR = getColor(DATE.STATUS);
          return (
            // Date
            <div
              className={`flex items-center justify-center bg-[${COLOR}] min-w-12 min-h-12 rounded-sm shadow-md shadow-neutral-950`}
              key={DATE.DATE}
            >
              <span className="text-white text-xl font-semibold">
                {DATE.DATE}
              </span>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row max-sm:flex-wrap item-center gap-4 py-2">
        <div className={styles.CirclesContainer}>
          <div className={`${styles.Circles} bg-[#007736]`}></div>
          <span className="font-semibold">
            &nbsp;<strong>= </strong>
            {useLanguage === "hi" ? "उपस्थित" : "Present"}
          </span>
        </div>
        <div className={styles.CirclesContainer}>
          <div className={`${styles.Circles} bg-[#f71919]`}></div>
          <span className="font-semibold">
            &nbsp;<strong>= </strong>
            {useLanguage === "hi" ? "अनुपस्थित" : "Absent"}
          </span>
        </div>
        <div className={styles.CirclesContainer}>
          <div className={`${styles.Circles} bg-[#FFA109]`}></div>
          <span className="font-semibold">
            &nbsp; <strong>= </strong>
            {useLanguage === "hi" ? "अवकाश" : "Holiday"}
          </span>
        </div>
        <div className={styles.CirclesContainer}>
          <div className={`${styles.Circles} bg-black`}></div>
          <span className="font-semibold">
            &nbsp;<strong>= </strong>
            {useLanguage === "hi" ? "निर्धारित नहीं" : "Unallocated"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Insights;
