const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/hospital", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "Error connecting to mongo DB"));

db.once("open", () => {
  console.log("Database connected!:: MONGODB");
});

module.exports = db;