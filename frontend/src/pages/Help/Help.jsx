// React Router (Components)
import { Form, Link } from "react-router-dom";

// Local Hooks
import { useBRTSF } from "@hooks/SecuityHooks";

// Styles
import styles from "./Help.module.css";

// Data
import CardInfo from "@/data/HelpCards";

function Help() {
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
        <Form method="POST" className={styles.FORM}>
          <div className="flex flex-col gap-2">
            <label htmlFor="emailInput" className={styles.LABELS}>
              Email
            </label>
            <input
              id="emailInput"
              type="email"
              name="email"
              autoComplete="email"
              className={`w-[95%] max-sm:w-full ${styles.INPUTS}`}
              maxLength={100}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="concernInput" className={styles.LABELS}>
              Your Concern
            </label>
            <textarea
              id="concernInput"
              name="concern"
              autoComplete="off"
              className={`w-[95%] max-sm:w-full min-h-32 max-h-60 ${styles.INPUTS}`}
              maxLength={10000}
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-black text-white w-fit px-6 py-2 rounded-sm cursor-pointer font-semibold"
          >
            Submit
          </button>
        </Form>
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

// Submit Action
export async function HelpAction({ request }) {
  const formData = await request.formData(); // Getting Form Data Object

  // Data
  const EMAIL = useBRTSF(formData.get("email"));
  const Concern = useBRTSF(formData.get("concern"));

  // Creating Data Object
  const Data = {
    Email: EMAIL,
    Concern: Concern,
  };

  // Converting Data Object into JSON Format
  const DATA_JSON = JSON.stringify(Data);
  console.log("JSON Data:", DATA_JSON);
}

export default Help;
