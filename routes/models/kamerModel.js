// Dependencies
const mongoose = require("mongoose");

// Create Mongoose schema
const Schema = mongoose.Schema;

// Mongoose schema details
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
      unique: true, // kamerNummer needs to be unique
      index: true,
    },
    kamerStemmen: {
      type: Number,
      required: true,
      index: true,
    },
  },
  // Put schema in a specific collection
  {
    collection: "kamers",
  }
);

// Export schema as model
const kamerModel = mongoose.model("kamers", kamer);
module.exports = kamerModel;
