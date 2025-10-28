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
          { path: "/about", element: <About /> },
          { path: "/release_notes", element: <About /> },
          { path: "/credits", element: <About /> },
          { path: "/gallery", element: <Gallery /> },
          { path: "/dashboard", element: <Dashboard /> },
          { path: "/notifications", element: <Notifications /> },
          { path: "/dashboard/tools/atm", element: <ATM /> },
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
