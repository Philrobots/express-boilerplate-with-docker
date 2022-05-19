"use strict";

const express = require("express");

// Constants
const PORT = 3000;

// App
const app = express();

// listener
app.listen(PORT, () => {
  console.log("Listenning on port 3000!");
});

// routes
app.get("/", function (_req, res) {
  res.send("Hello world");
});

app.get("/docker", (_req, res) => {
  res.send("Docker is running this app :)");
});
