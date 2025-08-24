import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";

import Teacher from "../Content/Teacher";
import Student from "../Content/Student";

function Dashboard({ UserType }) {
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
