import { useState } from "react";

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

import Teacher from "../Content/Teacher";
import Student from "../Content/Student";

function Dashboard() {
  const [UserType, SetUserType] = useState("TCH");
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        {UserType === "TCH" && <Teacher />}
        {UserType === "STD" && <Student />}
        <Navigation />
      </main>
    </>
  );
}

export default Dashboard;
