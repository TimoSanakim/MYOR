const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stem = new Schema(
  {
    kamerNaam: {
      type: String,
      required: true,
      index: true,
    },

    kamerNummer: {
      type: Number,
      required: true,
      unique: true,
      index: true,
    },
  },

  {
    collection: "stemmen",
  }
);

const stemModel = mongoose.model("stemmen", stem);

module.exports = stemModel;
