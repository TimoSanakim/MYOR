const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const kamer = new Schema(
  {
    kamerNaam: {
      type: String,
      required: true,
      index: true,
    },
    kamerBeschrijving: {
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
    kamerStemmen: {
      type: Number,
      required: true,
      index: true,
    },
  },

  {
    collection: "kamers",
  }
);

const kamerModel = mongoose.model("kamers", kamer);

module.exports = kamerModel;
