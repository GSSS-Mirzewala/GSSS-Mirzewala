// Dependencies
import { Outlet } from "react-router-dom";

// Styles Sheets
import "./App.css";

// Context Block
import { AuthProvider } from "./Storage/ProtectContext";
import { BASIC_PREFERENCES_PROVIDER } from "./Storage/PreferencesContext";

function App() {
  return (
    <AuthProvider>
      <BASIC_PREFERENCES_PROVIDER>
        <Outlet />
      </BASIC_PREFERENCES_PROVIDER>
    </AuthProvider>
  );
}

export default App;
