// React Router (Components)
import { Link } from "react-router-dom";

// Styles
import styles from "./styles/Footer.module.css";

// Icons
import Instagram from "@icons/Instagram.svg";
import X from "@icons/X.svg";
import Threads from "@icons/Threads.svg";

function Footer() {
  return (
    <div className="w-full p-8 py-6 bg-white">
      <div className="flex items-center justify-center pb-3">
        <p className="font-semibold text-lg max-sm:text-base max-sm:text-center">
          <span className="font-semibold" style={{ color: "var(--primary)" }}>
            Govt. Sen. Sec. School&nbsp;
          </span>
          <span className="font-semibold" style={{ color: "var(--secondary)" }}>
            Mirzewala (335038),&nbsp;
          </span>
          Sri Ganganagar - Rajasthan.
        </p>
      </div>
      <hr className="text-[#c0c0c0]" />
      <div className="flex items-center justify-between max-sm:flex-col max-sm:justify-center pt-3">
        <div className="max-sm:hidden flex flex-wrap gap-x-8 items-center">
          <Link to="/about" className={styles.Links}>
            About
          </Link>
        </div>
        <div className="flex items-center justify-end gap-4 max-sm:gap-6">
          <img src={Instagram} alt="Instragram_Icon" className={styles.Icons} />
          <img src={X} alt="X_Icon" className={styles.Icons} />
          <img src={Threads} alt="Threads_Icon" className={styles.Icons} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
