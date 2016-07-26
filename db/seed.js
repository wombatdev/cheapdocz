var mongoose = require("./schema");
var seedData = require("./doctor_seeds.json");

var Doctor = mongoose.model("Doctor")

Doctor.remove({}).then(function(){
  Doctor.collection.insert(seedData).then(function(){
    process.exit();
  })
});
