const path = require("path");

var express = require("express");
var app = express();
var bodyparser = require("body-parser");
app.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
app.use(bodyparser.json());

var kamer = require("./routes/kamer");
app.use("/api/kamerMaken/", kamer);

var stem = require("./routes/stem");
app.use("/api/stemmen/", stem);

app.get("*", express.static(path.dirname(require.main.filename)));

app.listen(process.env.port || 1234, function (error) {
  if (error) console.log(error);

  console.log("running server on port 1234");
});
