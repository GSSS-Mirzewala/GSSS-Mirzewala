import { useContext } from "react";
import { PreferedLanguage } from "../../Storage/PreferencesContext";

function Question(props) {
  const useLanguage = useContext(PreferedLanguage);
  return (
    <div className="rounded-[7px] bg-white p-4 flex items-start justify-start flex-col gap-1.5">
      <h2 className="text-[22px] font-medium" style={{ color: props.Color }}>
        {useLanguage === "hi" ? props.Hindi_Title : props.Title}
      </h2>
      <p className="text-[22px] font-medium max-sm:text-lg">
        {useLanguage === "hi" ? props.Hindi_Description : props.Description}
      </p>
    </div>
  );
}

export default Question;
