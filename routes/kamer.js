// Dependencies
var express = require("express");
var router = express.Router();
var kamer = require("./models/kamerModel");

// Connect to database
const database = require("./database");
database.connect();

// GET requests
router.get("/", function (req, res) {
  res.send("{method:get}");
});

// POST requests
router.post("/", function (req, res) {
  // Make new room with data from request
  var kmr = new kamer(req.body);
  kmr.save(function (error, result) {
    // Send JSON data back as response
    res.json(result);
  });
});

// PUT requests
router.put("/", function (req, res) {
  res.send("{method:put}");
});

module.exports = router;
