// Dependencies
var express = require("express");
var router = express.Router();
var model = require("./models/kamerModel");

// Connect to database
const database = require("./database");
database.connect();

// GET requests
router.get("/", (req, res) => {
  // Delete database collection
  model.collection.drop();
});

module.exports = router;
