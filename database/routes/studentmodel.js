const mongoose = require("mongoose");



const Schema = mongoose.Schema;



const kamers = new Schema(

    {

        kamernaam: {
            type: String,
            required: true,
            index: true

        },

        nummer: {
            type: Number,
            required: true,
            unique: true,
            index: true
        }
    },

    {
        collection: "kamers"

    }

);



const smodel = mongoose.model("kamers", kamers);



module.exports = smodel;