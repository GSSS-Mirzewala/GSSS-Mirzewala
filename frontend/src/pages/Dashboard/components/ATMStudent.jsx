// Local Hooks
import { useCalendar } from "@hooks/ContextHooks";

// Local Components
import ATM_Status from "./ATMStatus";

function ATM_Student({ Avatar, ID, Name, Father, Mark }) {
  const { FULL_YEAR, MONTH, DATE, AM_PM } = useCalendar();

  function handleMarkAttendence(status) {
    // Creating Entry Object
    const Entry = {
      ID: ID,
      Name: Name,
      Father: Father,
      Status: status,
      Date: `${FULL_YEAR}-${String(MONTH).padStart(2, "0")}-${DATE}`,
      Time: `${(new Date().getHours() % 12)
        .toString()
        .padStart(2, "0")}:${new Date()
        .getMinutes()
        .toString()
        .padStart(2, "0")}:${new Date()
        .getSeconds()
        .toString()
        .padStart(2, "0")} ${AM_PM}`,
    };
    Mark(Entry);
  }
  return (
    <div className="flex flex-row justify-between rounded-sm px-3 py-2">
      <div className="flex flex-row">
        <img src={Avatar} width={40} />
        <div className="px-3 flex flex-col items-start justify-start">
          <span className="font-semibold">{Name}</span>
          <span className="font-semibold tracking-wide text-[14px] text-[#c0c0c0]">
            S/O {Father}
          </span>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center border-2 border-white">
        <ATM_Status
          STD_ID={ID}
          Text="P"
          Background="bg-green-700"
          Status="Present"
          Mark={handleMarkAttendence}
        />
        <ATM_Status
          STD_ID={ID}
          Text="A"
          Background="bg-red-700"
          Status="Absent"
          Mark={handleMarkAttendence}
        />
      </div>
    </div>
  );
}

export default ATM_Student;
