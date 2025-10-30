import { createContext, useState } from "react";

const HolidayContext = createContext();

export const HolidayProvider = ({ children }) => {
  function determineHoliday() {
    let isHoliday = false;
    if ("Sunday" === "Sunday") {
      isHoliday = true;
    }
    return isHoliday;
  }

  const [isHoliday, SET_HOLIDAY_STATUS] = useState(determineHoliday);
  return (
    <HolidayContext.Provider value={{ isHoliday, SET_HOLIDAY_STATUS }}>
      {children}
    </HolidayContext.Provider>
  );
};

// Exportion (Block)
export default HolidayContext;
