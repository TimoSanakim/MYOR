// Dependencies
var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var model = require("./models/kamerModel");

// Connect to database
mongoose.connect(
  "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@Myor.6scmy.mongodb.net/Myor?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// GET requests
router.get("/", (req, res) => {
  // Delete database collection
  model.collection.drop();
});

module.exports = router;
