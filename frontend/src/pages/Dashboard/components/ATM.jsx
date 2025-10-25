// React Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Local Hooks
import { useCalendar } from "@/hooks/ContextHooks";

// Assets
import Avatar from "@/assets/public/Avatar.svg";

// Local Components
import ATM_Student from "./ATMStudent";
import Preview from "./Preview";

// Redux Slices
import { ATM_Sheet_Actions } from "@/store/Slices/ATM_Sheet";

function ATM() {
  const [PREVIEW_STATE, UPDATE_PREVIEW_STATE] = useState("hidden");
  const dispatch = useDispatch();

  function handleMarkAttendence(block) {
    UPDATE_STD_LIST(
      STD_LIST.map((STD) => {
        if (STD.ID === block.ID) {
          return { ...STD, marked: true }; // Create a new object with the updated 'age'
        }
        return STD; // Return other objects as they are
      })
    );
    dispatch(ATM_Sheet_Actions.Mark(block));
  }

  // Using Hooks
  const { DATE, DATE_SUFFIX, SHORT_MONTH_NAME, FULL_YEAR } = useCalendar();

  // States
  const [STD_LIST, UPDATE_STD_LIST] = useState([
    {
      Avatar: Avatar,
      ID: 1,
      Name: "Tanveer Nahar",
      Father: "Sukhwant Singh",
      marked: false,
    },
    {
      Avatar: Avatar,
      ID: 2,
      Name: "Gurman Singh",
      Father: "Sandeep Singh",
      marked: false,
    },
    {
      Avatar: Avatar,
      ID: 3,
      Name: "Sahil",
      Father: "Santosh Kumar",
      marked: false,
    },
  ]);

  // Preview
  function handlePreview() {
    if (PREVIEW_STATE === "hidden") {
      UPDATE_PREVIEW_STATE("visible");
    } else {
      UPDATE_PREVIEW_STATE("hidden");
    }
  }

  return (
    <div className="bg-white rounded-md border-2 border-gray-700">
      <div className="flex items-center justify-between py-3 px-4 max-sm:px-2">
        <span className="text-[#c0c0c0] text-lg max-sm:hidden font-semibold">
          {DATE}
          {DATE_SUFFIX} {SHORT_MONTH_NAME} {FULL_YEAR}
        </span>
        <span className="text-lg max-sm:text-base font-semibold text-red-500">
          Class 9th
        </span>
        <button
          type="button"
          className="font-semibold text-white bg-blue-400 px-3 py-1 rounded-sm cursor-pointer max-sm:text-sm"
          onClick={handlePreview}
        >
          Preview
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-4 py-3 pl-2 pr-1">
        {PREVIEW_STATE === "visible" && (
          <>
            <div className="fixed inset-0 bg-black/40 z-40"></div>
            <div className="fixed inset-0 flex items-center justify-center z-50">
              <Preview UPDATE_PREVIEW_STATE={handlePreview} />
            </div>
          </>
        )}
        {STD_LIST.map((STD_INFO) => {
          return (
            <ATM_Student
              Avatar={STD_INFO.Avatar}
              ID={STD_INFO.ID}
              Name={STD_INFO.Name}
              Father={STD_INFO.Father}
              isMarked={STD_INFO.marked}
              key={STD_INFO.ID}
              Mark={handleMarkAttendence}
            />
          );
        })}
      </div>
    </div>
  );
}

export default ATM;
