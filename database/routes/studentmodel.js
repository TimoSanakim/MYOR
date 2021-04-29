var mongoose = require("mongoose");



var Schema = mongoose.Schema;



var kamers = new Schema(

    {

        kamernaam: {
            type: String,
            required: true
        },

        nummer: {
            type: Number,
            required: true,
            unique: true
        },

    },

    {
        collection: "kamers"
    }

);



var smodel = mongoose.model("kamers", kamers);



module.exports = smodel;