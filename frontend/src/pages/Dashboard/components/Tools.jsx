// Local Components
import ToolCard from "./ToolCard";

function Tools() {
  const Tools = [
    {
      Name: "ATTENDENCE MARKER",
      Description:
        "Attendance Marker is a dedicated tool for teachers to quickly record student attendance. It allows marking each student as either Present or Absent, ensuring accurate daily records and easy tracking for the school.",
      Icon: "../src/assets/Icons/Check.svg",
      Route: "/dashboard/attendence",
    },
  ];
  return (
    <div className="w-full bg-white p-8 rounded-sm flex flex-row items-center justify-between max-sm:justify-center overflow-x-auto gap-8 scroll-smooth">
      {Tools.map((Tool) => {
        return (
          <ToolCard
            Name={Tool.Name}
            Description={Tool.Description}
            Icon={Tool.Icon}
            Route={Tool.Route}
            key={Tool.Name}
          />
        );
      })}
    </div>
  );
}

export default Tools;
