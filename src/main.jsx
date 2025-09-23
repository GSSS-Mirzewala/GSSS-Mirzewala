// Packages
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Help from "./pages/Help";
import Gallery from "./pages/Gallery";
import Dashboard from "./pages/Dashboard";

// Actions
import { LoginAction } from "./pages/Login";
import { HelpAction } from "./pages/Help";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login />, action: LoginAction },
      { path: "/help", element: <Help />, action: HelpAction },
      { path: "/gallery", element: <Gallery /> },
      { path: "/dashboard", element: <Dashboard /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
