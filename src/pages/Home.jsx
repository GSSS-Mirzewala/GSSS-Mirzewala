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
      HINDI_TITLE: "G.S.S.S. Mirzewala क्या है?",
      DESCRIPTION:
        "G.S.S.S. Mirzewala (Government Senior Secondary School, Mirzewala) is a Hindi medium, RBSE-affiliated government school located in Mirzewala, in the Sri Ganganagar district of Rajasthan.",
      HINDI_DESCRIPTION:
        "G.S.S.S. Mirzewala (सरकारी वरिष्ठ माध्यमिक विद्यालय, मिर्जेवाला) एक हिंदी माध्यम, आरबीएसई से संबद्ध सरकारी विद्यालय है, जो राजस्थान के श्रीगंगानगर ज़िले के मिर्जेवाला में स्थित है।",
      COLOR: "#30DFC2",
    },
    {
      TITLE: "How is the teaching staff?",
      HINDI_TITLE: "शिक्षण स्टाफ कैसा है?",
      DESCRIPTION:
        "G.S.S.S. Mirzewala takes great pride in its team of highly qualified, experienced, and committed educators, who bring not only strong academic knowledge but also a deep passion for teaching and shaping young minds. Each teacher at the school is dedicated to nurturing students with care, encouraging their curiosity, and guiding them toward both academic success and personal growth.",
      HINDI_DESCRIPTION:
        "G.S.S.S. मिर्जेवाला अपने अत्यंत योग्य, अनुभवी और समर्पित शिक्षकों की टीम पर गर्व करता है, जो न केवल गहरी शैक्षणिक जानकारी लाते हैं बल्कि पढ़ाने और नन्हें मस्तिष्कों को संवारने के प्रति गहरा जुनून भी रखते हैं। विद्यालय का प्रत्येक शिक्षक विद्यार्थियों को स्नेहपूर्वक मार्गदर्शन देने, उनकी जिज्ञासा को प्रोत्साहित करने और उन्हें शैक्षणिक सफलता के साथ-साथ व्यक्तिगत विकास की ओर अग्रसर करने के लिए समर्पित है।",
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
      <main className="max-sm:pb-16">
        <Hero>
          <Quote />
          <Intro />
          {Information.map((Info, Index) => (
            <Question
              key={Index}
              Title={Info.TITLE}
              Hindi_Title={Info.HINDI_TITLE}
              Description={Info.DESCRIPTION}
              Hindi_Description={Info.HINDI_DESCRIPTION}
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
