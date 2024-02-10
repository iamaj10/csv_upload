// IMPORTING PACKAGE
const mongoose = require("mongoose");

// storing the db on mongo atlas
const DB =
  "mongodb+srv://dbUser:dbUserPassword@atlascluster.nesbr6t.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("Connection successful!");
  })
  .catch((err) => console.log("no connection " + err));

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to the DB"));

db.once("open", function () {
  console.log("Connected to the DB");
});

module.exports = db;
