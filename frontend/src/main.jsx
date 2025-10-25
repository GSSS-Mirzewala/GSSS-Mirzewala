// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Global CSS
import "./index.css";

// App
import App from "./App";

// Layouts
import Minimalist from "./Layouts/Minimalist.jsx";
import Classic from "./Layouts/Classic.jsx";

// Pages
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Help from "./pages/Help/Help";
import About from "./pages/About/About";
import Gallery from "./pages/Gallery/Gallery";
import Dashboard from "./pages/Dashboard/Dashboard";
import Notifications from "./pages/Notifications/Notifications";

// About Sections
import Introduction from "./pages/About/components/Introduction.jsx";
import ReleaseNotes from "./pages/About/components/ReleaseNotes.jsx";
import Credits from "./pages/About/components/Credits.jsx";

// Dashboard Sections
import ATM from "./pages/Dashboard/components/ATM.jsx";

// Actions
import { LoginAction } from "./pages/Login/Login";
import { HelpAction } from "./pages/Help/Help";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <Classic />,
        children: [
          { index: true, element: <Home /> },
          {
            path: "/about",
            element: <About />,
            children: [
              { index: true, element: <Introduction /> },
              { path: "release_notes", element: <ReleaseNotes /> },
              { path: "credits", element: <Credits /> },
            ],
          },
          { path: "/gallery", element: <Gallery /> },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/notifications", element: <Notifications /> },
          { path: "/dashboard/attendence", element: <ATM /> },
        ],
      },
      {
        element: <Minimalist />,
        children: [
          { path: "/login", element: <Login />, action: LoginAction },
          { path: "/help", element: <Help />, action: HelpAction },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
