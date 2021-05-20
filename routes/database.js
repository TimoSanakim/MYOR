const database = {};

database.connect = () => {
  var mongoose = require("mongoose");

  // Connect to database
  mongoose.connect(
    "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@Myor.6scmy.mongodb.net/Myor?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = database;
