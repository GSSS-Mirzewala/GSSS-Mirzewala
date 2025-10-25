// React Router (Components)
import { Outlet } from "react-router-dom";

// React Hooks
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// Local Components
import Menu from "./components/Menu";

function About() {
  const [SELECTED, SET_SELECTED] = useState("Introduction");
  const location = useLocation();

  // Set Selected Tab as per URL
  useEffect(() => {
    if (location.pathname.toLowerCase() === "/about/") {
      SET_SELECTED("Introduction");
    } else if (location.pathname.toLowerCase() === "/about/release_notes") {
      SET_SELECTED("Release Notes");
    } else if (location.pathname.toLowerCase() === "/about/credits") {
      SET_SELECTED("Credits");
    }
  }, [location]);

  return (
    <>
      <Menu SELECTED={SELECTED} />
      <div className="w-full bg-white rounded-sm p-3">
        <Outlet />
      </div>
    </>
  );
}

export default About;
