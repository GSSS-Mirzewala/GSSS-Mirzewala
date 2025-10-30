// React Router (Components)
import { Form } from "react-router-dom";

// React Redux (Hooks)
import { useSelector } from "react-redux";

// Local Components
import Preview_STD from "./Preview_STD";

function Preview({ UPDATE_PREVIEW_STATE }) {
  const store = useSelector((store) => store.ATM_SHEET);
  const STD_LIST = [];
  JSON.parse(JSON.stringify(store)).map((entries) => {
    STD_LIST.push(entries);
  });
  return (
    <Form className="bg-white min-w-[90vw] max-w-[90vh] max-md:max-w-[350px] rounded-[10px] shadow-lg">
      <div className="flex items-center justify-between py-3 px-4">
        <button
          type="button"
          className="font-semibold text-red-500 cursor-pointer"
          onClick={UPDATE_PREVIEW_STATE}
        >
          Cancel
        </button>
        <p className="font-semibold">Preview</p>
        <button
          type="submit"
          className="font-semibold text-white bg-blue-400 px-3 py-1 rounded-sm cursor-pointer max-sm:text-sm"
        >
          Submit
        </button>
      </div>
      <hr />
      <div className="flex flex-col gap-4 justify-between rounded-sm px-3 py-2">
        {STD_LIST.length === 0 ? (
          <p className="my-4 text-center font-semibold text-gray-500">
            You haven’t marked the attendance for any student yet.
          </p>
        ) : (
          STD_LIST.map((STD, i) => {
            return (
              <Preview_STD
                i={i}
                Name={STD.Name}
                Father={STD.Father}
                Status={STD.Status}
                key={STD.ID}
              />
            );
          })
        )}
      </div>
    </Form>
  );
}

export default Preview;

// Submit Action
export async function PreviewAction({ request }) {
  const store = useSelector((store) => store.ATM_SHEET);

  console.log(store);

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
