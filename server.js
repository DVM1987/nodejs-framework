var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("views", "./views");
app.listen(3000);

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

var fs = require("fs");
var obj = null;

const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

fs.readFile("./config.json", "utf8", function (err, data) {
  if (err) throw err;
  obj = JSON.parse(data);

  mongoose.connect(
    "mongodb+srv://" +
      obj.mongodb.username +
      ":" +
      obj.mongodb.password +
      "@" +
      obj.mongodb.server +
      "/" +
      obj.mongodb.dbname +
      "?retryWrites=true&w=majority",
    function (error) {
      if (error) {
        console.log(error);
      } else {
        console.log("Mongodb connected successfully");
        require("./routes/student")(app, obj);
      }
    }
  );
});
