// React Redux (Hooks)
import { useSelector } from "react-redux";

// React Router (Components)
import { Link } from "react-router-dom";

// Styles
import styles from "./styles/Navbar.module.css";

// Icons
import Home from "@icons/Home.svg";
import Gallery from "@icons/Gallery.svg";
import Dashboard from "@icons/Dashboard.svg";
import Notifications from "@icons/Notifications.svg";

// Assets
import Avatar from "@/assets/public/Avatar.svg";

function Navbar() {
  const USER = useSelector((store) => store.USER);
  return (
    <nav className={styles.Navbar}>
      <div>
        <span
          className="text-xl font-semibold"
          style={{ color: "var(--primary)" }}
        >
          G.S.S.S.{" "}
        </span>
        <span
          className="text-xl font-semibold"
          style={{ color: "var(--secondary)" }}
        >
          Mirzewala
        </span>
      </div>
      <div className="flex items-center gap-8">
        <div className={styles.Icons}>
          <Link to="/">
            <img src={Home} alt="Home" />
          </Link>
        </div>
        <div className={styles.Icons}>
          <Link to="/gallery">
            <img src={Gallery} alt="Gallery" />
          </Link>
        </div>
        <div className={styles.Icons}>
          <Link to="/dashboard">
            <img src={Dashboard} alt="Dashboard" />
          </Link>
        </div>
        <div className={styles.Icons}>
          <Link to="/notifications">
            <img src={Notifications} alt="Notifications" />
          </Link>
        </div>
        <Link to={USER.USER_TYPE === "GUEST" ? "/login" : "/profile"}>
          <button
            className={`${styles.Profile} flex items-center justify-center gap-2 border-1 rounded-full p-1 px-2 cursor-pointer`}
            type="button"
          >
            <img
              src={Avatar}
              className={styles.Avatar}
              alt="Avatar"
              loading="lazy"
            />
            <span className="font-semibold text-md">
              {USER.USER_TYPE === "GUEST" ? "Guest" : USER.NAME}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
