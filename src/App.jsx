// Import Dependencies
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import Styles Sheets
import "./App.css";

// Import Components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Security/ProtectedRoute";

// Context Block
import { AuthProvider } from "./Storage/ProtectContext";
import { BASIC_PREFERENCES_PROVIDER } from "./Storage/PreferencesContext";

function App() {
  const [UserType, SetUserType] = useState("TCH");
  return (
    <AuthProvider>
      <BASIC_PREFERENCES_PROVIDER>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/gallery"
            element={
              <ProtectedRoute>
                <Gallery />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard UserType={UserType} />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BASIC_PREFERENCES_PROVIDER>
    </AuthProvider>
  );
}

export default App;
