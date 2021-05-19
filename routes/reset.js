var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var model = require("./models/kamerModel");

mongoose.connect(
  "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@Myor.6scmy.mongodb.net/Myor?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

router.get("/", (req, res) => {
  model.collection.drop();
});

module.exports = router;
