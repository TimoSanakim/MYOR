const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const stem = new Schema(
  {
    stemValue: {
      type: Number,
      required: true,
      index: true,
    },
  },

  {
    collection: "stemmen",
  }
);

const stemModel = mongoose.model("stemmen", stem);

module.exports = stemModel;
