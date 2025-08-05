import { Link } from "react-router-dom";
import styles from "../styles/Help.module.css";

function Help() {
  const CardInfo = [
    {
      SERIAL_NUMBER: 1,
      QUESTION: "Forgot USTA PIN or Password?",
      ANSWER:
        "If you forgot your USTA PIN (Unique Student, Teacher, or Administrator PIN) or password, please contact your School Administration. They will help you recover or reset your credentials.",
    },
    {
      SERIAL_NUMBER: 2,
      QUESTION: "Why is the website lagging or loading slowly?",
      ANSWER:
        "The lag may be due to heavy traffic, ongoing maintenance, or low internet speed. We are continuously working to improve performance. Please refresh the page or try again after some time.",
    },
    {
      SERIAL_NUMBER: 3,
      QUESTION: "Who manages and controls the G.S.S.S. Mirzewala website?",
      ANSWER:
        "The website is managed by the G.S.S.S. Mirzewala Management, which oversees its content, updates, and technical maintenance to ensure smooth functioning and accurate information.",
    },
    {
      SERIAL_NUMBER: 4,
      QUESTION: "How secure is the website?",
      ANSWER:
        "The website uses modern security practices, including encrypted login and secure data handling, to protect user information. Regular updates and monitoring are done to ensure safety. ",
    },
  ];
  return (
    <div className={styles.App}>
      <div className="w-full text-end">
        <Link to="/login">
          <span className="text-blue-700 font-semibold cursor-pointer">
            Go Back
          </span>
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl">Need Help?</h1>
        <p className={styles.PARAGRAPH}>
          Can’t find your concern? Fill out the form below and we’ll get back to
          you shortly!
        </p>
      </div>
      <div className="mt-10">
        <form action="" className={styles.FORM}>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className={styles.LABELS}>
              Email
            </label>
            <input
              type="text"
              className={`w-[95%] max-sm:w-full ${styles.INPUTS}`}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="" className={styles.LABELS}>
              Your Concern
            </label>
            <textarea
              name=""
              id=""
              className={`w-[95%] max-sm:w-full min-h-32 max-h-60 ${styles.INPUTS}`}
            ></textarea>
          </div>
          <button className="bg-black text-white w-fit px-6 py-2 rounded-sm cursor-pointer font-semibold">
            Submit
          </button>
        </form>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl text-center">FAQs</h1>
        <div className={styles.CARDS_CONTAINER}>
          {CardInfo.map((Card) => {
            return (
              <div className={styles.CARDS} key={Card.SERIAL_NUMBER}>
                <span className={styles.CIRCLES}>{Card.SERIAL_NUMBER}</span>
                <h2 className="font-semibold">{Card.QUESTION}</h2>
                <p className={styles.FAQ_PARAGRAPH}>
                  <strong className="font-semibold">Ans: </strong>
                  {Card.ANSWER}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Help;
