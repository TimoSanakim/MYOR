var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
var model = require("./kamerModel");

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
  var kamerNummer = req.body;

  model.findOneAndUpdate(
    { kamerNummer: kamerNummer.stemValue },
    { $inc: { kamerStemmen: 1 } },
    { new: true },
    (error, data) => {
      if (error) {
        console.log(error);
      } else {
        console.log(data);
      }
    }
  );
});

router.put("/", function (req, res) {
  res.send("{method:put}");
});

module.exports = router;
