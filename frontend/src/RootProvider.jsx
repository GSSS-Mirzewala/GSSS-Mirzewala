// Dependencies (Block)
import { Provider as ReduxProvider } from "react-redux";

// Context API Providers (Block)
import { AuthProvider } from "./Storage/Authentication";
import { HolidayProvider } from "./Storage/Holiday";
import { PrefProvider } from "./Storage/Preferences";
import { CalProvider } from "./Storage/Calendar";

// React Redux (Block)
import STORE from "./store/index";

function RootProvider({ children }) {
  return (
    <ReduxProvider store={STORE}>
      <AuthProvider>
        <PrefProvider>
          <HolidayProvider>
            <CalProvider>{children}</CalProvider>
          </HolidayProvider>
        </PrefProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default RootProvider;
