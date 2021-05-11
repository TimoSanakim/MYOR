const path = require("path");


var express = require('express');
var app = express();
var bodyparser = require('body-parser');
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());
var student = require('./routes/student');

app.use('/api/kamers/', student);
app.get("*", express.static(path.dirname(require.main.filename)));


app.listen(process.env.port || 1234, function (error) {
    if (error)
        console.log(error);

    console.log('running server on port 1234');
});