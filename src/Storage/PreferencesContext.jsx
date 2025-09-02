import { createContext, useState } from "react";

export const BASIC_PREFERENCES = createContext([{ LANGUAGE: "" }]);

export const BASIC_PREFERENCES_PROVIDER = ({ children }) => {
  const [LANGUAGE, UPDATE_LANGUAGE] = useState("en");
  return (
    <BASIC_PREFERENCES.Provider value={LANGUAGE}>
      {children}
    </BASIC_PREFERENCES.Provider>
  );
};
