// Dependencies (Block)
import { Provider as ReduxProvider } from "react-redux";

// Context API Providers (Block)
import { AuthProvider } from "./Storage/Authentication";
import { PrefProvider } from "./Storage/Preferences";
import { CalProvider } from "./Storage/Calendar";

// React Redux (Block)
import STORE from "./store/index";

function RootProvider({ children }) {
  return (
    <ReduxProvider store={STORE}>
      <AuthProvider>
        <PrefProvider>
          <CalProvider>{children}</CalProvider>
        </PrefProvider>
      </AuthProvider>
    </ReduxProvider>
  );
}

export default RootProvider;
