import styles from "../../styles/Sub-Styles/Intro.module.css";

function Intro() {
  return (
    <div className={styles.Box}>
      <h1 className={`${styles.Headings} text-[#FFA109]`}>
        राजकीय उच्च माध्यमिक विद्यालय, मिर्जेवाला
      </h1>
      <h1 className={`${styles.Headings} text-[#007736]`}>
        Government Senior Secondary School, Mirzewala
      </h1>
      <h1 className={`${styles.Headings} text-[#944B01]`}>
        (Affiliated with the Rajasthan Board of Secondary Education (RBSE))
      </h1>
    </div>
  );
}

export default Intro;
