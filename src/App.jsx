import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Dashboard from "./pages/Dashboard";
import ProtectedRoute from "./Security/ProtectedRoute";
import { AuthProvider } from "./Storage/ProtectContext";
import { PreferedLanguage } from "./Storage/PreferencesContext";

function App() {
  const [lang, setLang] = useState("en");
  const [UserType, SetUserType] = useState("STD");
  return (
    <AuthProvider>
      <PreferedLanguage.Provider value={lang}>
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
      </PreferedLanguage.Provider>
    </AuthProvider>
  );
}

export default App;
