import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

function Home() {
  const navigate = useNavigate();
  const location = useLocation();
  const [STATUS, setStatus] = useState("Checking...");

  useEffect(() => {
    const isUser = sessionStorage.getItem("User");
    const isGuest = sessionStorage.getItem("Guest");

    if (isUser) {
      setStatus("USER");
    } else if (isGuest === "true") {
      setStatus("GUEST");
    } else {
      setStatus("No Session Found");
      navigate("/login");
    }
  }, [location, navigate]);
  return (
    <>
      <header>
        <Navbar UserType={STATUS} />
      </header>
      <main className="max-[648px]:pb-16">
        <Hero />
        <Navigation />
      </main>
    </>
  );
}

export default Home;
