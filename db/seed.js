var mongoose = require("./schema");
var seedData = require("./doctor_seeds.json");
var procSeedData = require ("./procedure_seeds.json");

var Procedure = mongoose.model("Procedure");
var Doctor = mongoose.model("Doctor");

Doctor.remove({}).then(function(){
  Doctor.collection.insert(seedData).then(function(){
    process.exit();
  })
});

Procedure.remove({}).then(function(){
  Procedure.collection.insert(procSeedData).then(function(){
    process.exit();
  })
});

rebirthing = Procedure.findOne({name: "Rebirthing Therapy"});
apitherapy = Procedure.findOne({name: "Apitherapy"});
hip = Procedure.findOne({name: "Hip Replacement"});
ivf = Procedure.findOne({name: "In Vitro Fertilization"});
angio = Procedure.findOne({name: "Angioplasty"});
crowns = Procedure.findOne({name: "Dental Crowns, Caps and Veneers"});
gastric = Procedure.findOne({name: "Gastric Bypass"});
rhino = Procedure.findOne({name: "Rhinoplasty"});
teeth = Procedure.findOne({name: "Teeth Whitening"});
shoulder = Procedure.findOne({name: "Shoulder Surgery"});


dre = Doctor.findOne({name: "Dr. Dre"});
seuss = Doctor.findOne({name: "Dr. Seuss"});
pepper = Doctor.findOne({name: "Dr. Pepper"});
Doctor.findOne({name: "Dr. Leo Spaceman"}).then(function(response) {
    console.log("ANYTHING");
    response.procedures.push(rebirthing);
    response.procedures.push(apitherapy);
    response.procedures.push(ivf);
    response.procedures.save();
});



// spaceman.procedures.push(rebirthing);
// spaceman.procedures.push(apitherapy);
// dre.procedures.push(hip);
// dre.procedures.push(angio);
// spaceman.procedures.push(ivf);
// pepper.procedures.push(crowns);
// pepper.procedures.push(teeth);
// dre.procedures.push(shoulder);
// seuss.procedures.push(gastric);
// seuss.procedures.push(rhino);
//
// spaceman.procedures.save;
// dre.procedures.save;
// pepper.procedures.save;
// seuss.procedures.save;
