const express = require("express");
const db = require("./config/connection");
const routes = require("./routes");

// Use env if provided, connect on port 3001
const PORT = process.env.PORT || 3001;

// Use express
const app = express();

// Require models
// const { User, Thought } = require("./models");

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

db.once("open", () => {
  app.listen(PORT, () => {
    console.log(`API server for Social Network Api running on port ${PORT}!`);
  });
});
