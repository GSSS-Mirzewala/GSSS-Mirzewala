import { useState } from "react";

import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

import Teacher from "../Content/Teacher";
import Student from "../Content/Student";

function Dashboard() {
  const [UserType, SetUserType] = useState("STD");
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-sm:pb-16">
        {UserType === "TCH" && <Teacher />}
        {UserType === "STD" && <Student />}
        <Navigation />
      </main>
    </>
  );
}

export default Dashboard;
