var express = require("express");
var router = express.Router();
var stem = require("./stemModel");
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@Myor.6scmy.mongodb.net/Myor?retryWrites=true&w=majority",

  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  }
);

router.get("/", function (req, res) {
  res.send("{method:get}");
});

router.post("/", function (req, res) {
  var stm = new stem(req.body);
  console.log(stm);
  stm.save(function (error, result) {
    console.log(error);
    res.json(result);
    console.log(result);
  });
});

router.put("/", function (req, res) {
  res.send("{method:put}");
});

module.exports = router;
