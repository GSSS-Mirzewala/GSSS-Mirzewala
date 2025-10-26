// External Modules
const express = require("express");

// Creating Router
const PublicRoute = express.Router();

// Configuring Routes
PublicRoute.get("/", (req, res, next) => {
  console.log(`Request URL: ${req.url}`);
  console.log(`Request Method: ${req.method}`);
  console.log(`Hello, world!`);
});

module.exports = PublicRoute;
