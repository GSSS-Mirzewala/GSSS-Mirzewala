// React Dependencies
import { createContext, useState } from "react";

const HolidayContext = createContext();

// Data
import Holidays from "@/data/Holidays.js";

// Hooks
import { useCalendar } from "@hooks/ContextHooks";

export const HolidayProvider = ({ children }) => {
  const { DATE, MONTH, FULL_YEAR, FULL_DAY_NAME } = useCalendar();

  function determineHoliday() {
    let isHoliday = false;
    if (FULL_DAY_NAME === "Sunday") {
      isHoliday = true;
    } else if (
      Holidays.find((holiday) => holiday.Date === `${DATE}${MONTH}${FULL_YEAR}`)
    ) {
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
