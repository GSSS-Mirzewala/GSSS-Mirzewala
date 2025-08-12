import { useEffect, useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Navigation from "../components/Navigation";
import Intro from "../components/sub-components/Intro";
import Quote from "../components/sub-components/Quote";
import Question from "../components/sub-components/Question";
import Loading from "../components/Loading";

function Home() {
  const Information = [
    {
      TITLE: "What is G.S.S.S. Mirzewala?",
      DESCRIPTION:
        "G.S.S.S. Mirzewala (Government Senior Secondary School, Mirzewala) is a Hindi medium, RBSE-affiliated government school located in Mirzewala, in the Sri Ganganagar district of Rajasthan.",
      COLOR: "#30DFC2",
    },
    {
      TITLE: "How is the teaching staff?",
      DESCRIPTION:
        "G.S.S.S. Mirzewala takes great pride in its team of highly qualified, experienced, and committed educators, who bring not only strong academic knowledge but also a deep passion for teaching and shaping young minds. Each teacher at the school is dedicated to nurturing students with care, encouraging their curiosity, and guiding them toward both academic success and personal growth.",
      COLOR: "#7930DF",
    },
  ];
  const [LOADING, IsLoading] = useState(true);

  useEffect(() => {
    const showLoader = sessionStorage.getItem("showLoader");

    if (!showLoader) {
      const Delay = Math.random() * (5.5 - 1.5) + 1.5;
      const timer = setTimeout(() => {
        IsLoading(false);
        sessionStorage.setItem("showLoader", "true");
      }, Delay * 1000);

      return () => clearTimeout(timer);
    } else {
      IsLoading(false);
    }
  }, []);

  if (LOADING) {
    return <Loading />;
  }

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="max-[648px]:pb-16">
        <Hero>
          <Quote />
          <Intro />
          {Information.map((Info, Index) => (
            <Question
              key={Index}
              Title={Info.TITLE}
              Description={Info.DESCRIPTION}
              Color={Info.COLOR}
            />
          ))}
        </Hero>
        <Navigation />
      </main>
    </>
  );
}

export default Home;
