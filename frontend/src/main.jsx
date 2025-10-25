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
import Home from "@page/Home/Home";
import Login from "@page/Login/Login";
import Help from "@page/Help/Help";
import About from "@page/About/About";
import Gallery from "@page/Gallery/Gallery";
import Dashboard from "@page/Dashboard/Dashboard";
import Notifications from "@page/Notifications/Notifications";

// About Sections
import Introduction from "@page/About/components/Introduction.jsx";
import ReleaseNotes from "@page/About/components/ReleaseNotes.jsx";
import Credits from "@page/About/components/Credits.jsx";

// Dashboard Sections
import ATM from "@page/Dashboard/components/ATM.jsx";

// Actions
import { LoginAction } from "@page/Login/Login";
import { HelpAction } from "@page/Help/Help";

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
