import Intro from "./sub-components/Intro";
import Quote from "./sub-components/Quote";
import Question from "./sub-components/Question";

function Hero(props) {
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
  return (
    <>
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
    </>
  );
}

export default Hero;
