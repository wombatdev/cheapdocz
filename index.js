var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/schema");
var app     = express();

var Doctor = mongoose.model("Doctor");

app.set("port", process.env.PORT || 3001);
app.set("view engine", "hbs");

// app.engine(".hbs", hbs({
//   extname:        ".hbs",
//   partialsDir:    "views/",
//   layoutsDir:     "views/",
//   defaultLayout:  "layout-main"
// }));


app.use("/assets", express.static("public"));
app.use(parser.urlencoded({extended:true}))
