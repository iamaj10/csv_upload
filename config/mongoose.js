// IMPORTING PACKAGE
const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB = "mongodb://127.0.0.1:27017/csv_upload";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

// MAKING CONNECTION
// const DB = mongoose.connect('mongodb://127.0.0.1:27017/csvUploads');

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DB"));

db.once("open", function () {
  console.log("Connected to the DB");
});

module.exports = db;
