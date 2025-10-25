// React Router (Components)
import { Form, Link } from "react-router-dom";

// React Hooks
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

// Local Hooks
import { useBSF } from "@/hooks/SecuityHooks";

// Styles
import styles from "./Login.module.css";

function Login() {
  // Declarations
  const navigate = useNavigate();

  // States
  const [USTA_PIN, SET_USTA_PIN] = useState("");
  const [Password, SET_Password] = useState("");

  // Functions
  function handleSkip() {
    sessionStorage.setItem("Guest", true);
    navigate("/");
  }
  useEffect(() => {
    const IsUser = sessionStorage.getItem("User");
    if (IsUser) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div className={styles.App}>
      <Form method="POST" className="w-full flex flex-col items-start">
        <div className="px-4 w-full flex justify-end">
          <a
            className={`${styles.FONT_SAIRA} text-[#1007FF] font-semibold cursor-pointer`}
            onClick={handleSkip}
          >
            Skip
          </a>
        </div>
        <div className="flex flex-col gap-3 mt-4">
          <h2 className={`${styles.FONT_INTER} text-2xl`}>Welcome back!</h2>
          <p className={`${styles.FONT_INTER} text-sm font-light`}>
            We're glad to see you again. Let's get started!
          </p>
        </div>
        <div className="w-full flex flex-col gap-4 py-2 mt-10">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="USTA_PIN"
              className={`${styles.LABELS} ${styles.FONT_INTER}`}
            >
              USTA PIN
            </label>
            <input
              type="text"
              className={styles.INPUTS}
              required
              id="USTA_PIN"
              value={USTA_PIN}
              name="USTA_PIN"
              minLength={11}
              maxLength={11}
              onChange={(e) => SET_USTA_PIN(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="Password"
              className={`${styles.LABELS} ${styles.FONT_INTER}`}
            >
              Password
            </label>
            <input
              type="password"
              className={styles.INPUTS}
              required
              id="Password"
              value={Password}
              name="Password"
              minLength={8}
              maxLength={100}
              onChange={(e) => SET_Password(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-4">
          <p className={`${styles.FONT_INTER} font-semibold cursor-pointer`}>
            Forgot Password?
          </p>
          <button
            className={`${styles.FONT_SAIRA} px-8 py-2 bg-black text-white rounded-sm text-md cursor-pointer`}
          >
            Login
          </button>
        </div>
      </Form>
      <div className="w-full flex flex-row justify-between">
        <Link to="/help">
          <button className={`${styles.BUTTONS} ${styles.FONT_SAIRA}`}>
            Need Help?
          </button>
        </Link>
        <Link to="/about">
          <button
            className={`${styles.BUTTONS} ${styles.FONT_SAIRA}`}
            onClick={handleSkip}
          >
            About
          </button>
        </Link>
      </div>
    </div>
  );
}

// Submit Action
export async function LoginAction({ request }) {
  const formData = await request.formData(); // Getting FormData object

  // Sanitizing Data
  const USTA_PIN = useBSF(formData.get("USTA_PIN"));
  const Password = useBSF(formData.get("Password"));

  // Creating Credentials Object
  const Credentials = {
    USTA_PIN: USTA_PIN,
    Password: Password,
  };

  // Converting Credentials into JSON Format
  const CREDENTIALS_JSON = JSON.stringify(Credentials);
  console.log("JSON Credentials:", CREDENTIALS_JSON);
}

export default Login;
