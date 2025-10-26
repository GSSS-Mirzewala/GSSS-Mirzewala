// Core Modules
const path = require("path");

// External Modules
const express = require("express");

// Utilities
const Root = require("./utils/Root");

// Routes
const PublicRoute = require("./routes/Public");

// Creating 'Express' App
const app = express();

// Encoding Request Bodies
app.use(express.urlencoded());

// Making 'public' folder Accessible.
app.use(express.static(path.join(Root, "public")));

// Routing
app.use("/", PublicRoute);

// Port Number
const PORT = 8000;

// Making App Listen
app.listen(PORT, () => {
  console.log(`✔  App is Running at http://localhost:${PORT}`);
});
