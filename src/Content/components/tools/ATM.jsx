import styles from "./styles/ATM.module.css";

// Icons
import Check from "../../../assets/Icons/Check.svg";

function ATM() {
  return (
    <div className={styles.CONTAINER}>
      <div className={styles.CIRCLE}>1</div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <img src={Check} alt="" />
        <h4 className="text-center font-semibold">ATTENDENCE MARKER</h4>
      </div>
      <div>
        <p className="text-center font-light text-[16px]">
          Attendance Marker is a dedicated tool for teachers to quickly record
          student attendance. It allows marking each student as either Present
          or Absent, ensuring accurate daily records and easy tracking for the
          school.
        </p>
      </div>
      <div className="flex items-center justify-center py-3">
        <button className={styles.BUTTON}>Next</button>
      </div>
    </div>
  );
}

export default ATM;
