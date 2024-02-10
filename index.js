const express = require("express");
const app = express();
const port = 8000;

const expressLayouts = require("express-ejs-layouts");
const csv = require("csv-parser");
const db = require("./config/mongoose");
const bodyParser = require("body-parser");

// setting layouts
app.use(expressLayouts);

// middleware for body-parser
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

//setting up view engine
app.set("view engine", "ejs");
app.set("views", "./views");

// setting up routes
app.use("/", require("./routes"));

// directing the app in the given port
app.listen(port, function (err) {
  if (err) {
    console.log("Error", err);
    return;
  }
  console.log("Server is up and running on port: ", port);
});
