import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import ProtectedRoute from "./Security/ProtectedRoute";
import { AuthProvider } from "./Storage/ProtectContext";

function App() {
  return (
    <AuthProvider>
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
        <Route path="/login" element={<Login />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
