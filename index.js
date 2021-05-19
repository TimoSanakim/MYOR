// Dependencies
const path = require("path");
var express = require("express");
var app = express();
var bodyparser = require("body-parser");

// Use bodyparser for data parsing
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

// API endpoint for making new rooms
var kamer = require("./routes/kamer");
app.use("/api/kamerMaken/", kamer);

// API endpoint for voting
var stem = require("./routes/stem");
app.use("/api/stemmen/", stem);

// API endpoint for resetting battle
var reset = require("./routes/reset");
app.use("/api/reset/", reset);

// Set app directory
app.get("*", express.static(path.dirname(require.main.filename)));

// Start app on port 1234
app.listen(process.env.port || 1234, function (error) {
  if (error) console.log(error);
  console.log("running server on port 1234");
});
