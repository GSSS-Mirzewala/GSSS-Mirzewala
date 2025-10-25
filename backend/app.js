// External Modules
import express from "express";

// Creating 'Express' App
const app = express();

// Encoding Request Bodies
app.use(express.urlencoded());

// Routes
app.use("/", (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Hello, world!`);
});

// Port Number
const PORT = 8000;

// Making App Listen
app.listen(PORT, () => {
  console.log(`✔  App is Running at http://localhost:${PORT}`);
});
