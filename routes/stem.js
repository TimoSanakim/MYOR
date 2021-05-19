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
  // Send all data back from database as response
  model.find().then((results) => res.json(results));
});

// POST requests
router.post("/", function (req, res) {
  var kamerNummer = req.body; // Get value from request body
  // Update value of a specific database item with the findOneAndUpdate function
  model.findOneAndUpdate(
    { kamerNummer: kamerNummer.stemValue }, // Specify database item to be updated
    { $inc: { kamerStemmen: 1 } }, // Increase value by one every time a request gets sent
    { new: true },
    (error, data) => {
      if (error) {
        // Handle errors
        console.log(error);
      } else {
        // Handle success
        console.log(data);
      }
    }
  );
});

// PUT requests
router.put("/", function (req, res) {
  res.send("{method:put}");
});

module.exports = router;
