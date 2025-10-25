// React Router (Components)
import { Link } from "react-router-dom";

// Styles
import styles from "./styles/Navigation.module.css";

// Icons
import Home from "@icons/Home.svg";
import Gallery from "@icons/Gallery.svg";
import Dashboard from "@icons/Dashboard.svg";
import Notifications from "@icons/Notifications.svg";

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
