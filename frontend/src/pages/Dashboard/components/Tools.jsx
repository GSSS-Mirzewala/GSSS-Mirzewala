// Local Components
import ToolCard from "./ToolCard";

function Tools() {
  const Tools = [
    {
      Name: "Attendence Marker",
      Description:
        "The ATM (Attendance Marker) by G.S.S.S. Mirzewala is a digital tool that allows teachers to quickly mark and manage student attendance online, ensuring accuracy, ease of use, and efficient record keeping.",
      Icon: "../src/assets/Icons/Check.svg",
      Route: "/dashboard/tools/atm",
    },
    {
      Name: "Roll Number Allocator",
      Description:
        "The RNA (Roll Number Allocator) is a digital tool by G.S.S.S. Mirzewala that automatically assigns unique roll numbers to students by class and section, ensuring accuracy, consistency, and saving teachers’ time.",
      Icon: "../src/assets/Icons/Graduation_Cap.svg",
      Route: "/dashboard/tools/rna",
    },
  ];
  return (
    <div className="w-full bg-white p-8 rounded-sm flex flex-row items-center justify-between overflow-x-auto gap-8 scroll-smooth">
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
