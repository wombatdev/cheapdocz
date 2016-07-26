var express = require("express");
var parser = require("body-parser");
var hbs     = require("express-handlebars");
var mongoose = require("./db/schema");
var app     = express();

var Doctor = mongoose.model("Doctor");

app.set("port", process.env.PORT || 3030);
app.set("view engine", "hbs");

app.engine(".hbs", hbs({
  extname:        ".hbs",
  partialsDir:    "views/",
  layoutsDir:     "views/",
  defaultLayout:  "layout-main"
}));


app.use("/assets", express.static("public"));
app.use(parser.json({extended:true}))



// index
app.get("/api/doctors", function(req, res){
  Doctor.find({}).then(function(doctors){
    res.json(doctors)
  });
});

// show
app.get("/api/doctors/:name", function(req, res){
  Doctor.findOne({name: req.params.name}).then(function(doctor){
    res.json(doctor)
  });
});


// delete
app.delete("/api/doctors/:name", function(req, res){
  Doctor.findOneAndRemove({name: req.params.name}).then(function(){
    res.json({ success: true })
  });
});


// update
app.put("/api/doctors/:name", function(req, res){
  Doctor.findOneAndUpdate({name: req.params.name}, req.body.doctor, {new: true}).then(function(doctor){
    res.json(doctor)
  });
});

// Root
app.get("/*", function(req, res){
  res.render("doctors");
});



app.listen(app.get("port"), function(){
  console.log("CHEEPDOCZZZZZ!");
});
