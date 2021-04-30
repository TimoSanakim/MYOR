var express = require('express');
var router = express.Router();
var student = require('./studentmodel');
var mongoose = require('mongoose');
mongoose.connect(

    "mongodb+srv://Myorman6487:HikWNhPxdVCSMMOI@Myor.6scmy.mongodb.net/Myor?retryWrites=true&w=majority",

    {

        useNewUrlParser: true,

        useUnifiedTopology: true,

    }

);

router.get('/', function (req, res) {
    res.send('{method:get}');
});
router.post('/', function (req, res) {
    var std = new student(req.body);
    console.log(std);
    std.save(function (error, result) {
        console.log(error);
        res.json(result);
        console.log(result);
    });
});

router.put('/', function (req, res) {
    res.send('{method:put}');
});
// router.post("/", async (req, res) => {

//     const {
//         kamernaam,
//         nummer
//     } = req.body;

//     console.log(nummer);
//     console.log(kamernaam);

//     try {

//         const response = await kamers.create({

//             kamernaam,

//             nummer,

//         });

//         console.log("Kamer created successfully: ", response);

//     } catch (error) {
//         console.log(error);
//         // Display error if response is error

//         if (error.code === 11000) {

//             // Duplicate key errorcode

//             return res.json({

//                 status: "error",

//                 error: "Number is not unique",

//             });

//         }

//         throw error;
//     }



//     res.json({
//         status: "ok"

//     });

// });
module.exports = router;