import { Link } from "react-router-dom";
import styles from "../styles/Navigation.module.css";

import Home from "../assets/Icons/Home.svg";
import Gallery from "../assets/Icons/Gallery.svg";
import Dashboard from "../assets/Icons/Dashboard.svg";
import Notifications from "../assets/Icons/Notifications.svg";

function Navigation() {
  return (
    <div className={styles.Menu}>
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
    </div>
  );
}

export default Navigation;
