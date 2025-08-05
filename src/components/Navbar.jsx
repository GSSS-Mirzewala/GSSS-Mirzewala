import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

import { useAuth } from "../Storage/ProtectContext";

import Home from "../assets/Icons/Home.svg";
import Gallery from "../assets/Icons/Gallery.svg";
import Dashboard from "../assets/Icons/Dashboard.svg";
import Notifications from "../assets/Icons/Notifications.svg";

import Avatar from "../assets/public/Avatar.svg";

function Navbar() {
  const { UserType } = useAuth();
  return (
    <nav className={styles.Navbar}>
      <div>
        <span className="text-[#40A269] text-xl font-semibold">G.S.S.S. </span>
        <span className="text-[#ff9409ec] text-xl font-semibold">
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
        <Link to={UserType === "GUEST" ? "/login" : "/profile"}>
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
              {UserType === "GUEST" ? "Guest" : "User"}
            </span>
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
