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
  Procedure.collection.insert(seedData).then(function(){
    process.exit();
  })
});

// spaceman = Doctor.findOne({name: "Dr. Leo Spaceman"}).then(function(doctor) {
//     console.log(doctor);
//     rebirthing = Procedure.findOne({name: "Rebirthing Therapy"}).then(function(procedure) {
//         doctor.procedures.push(procedure);
//         doctor.save().then(function() {
//             process.exit();
//         })
//     })
// })

var spaceman = new Doctor({
    name: "Dr. Leo Spaceman",
    specialty: "Meth Addiction and Child Psychiatry",
    photoUrl: "http://vignette4.wikia.nocookie.net/30rock/images/0/0d/Spaceman.jpg/revision/latest?cb=20130219225303",
    country: "Democratic People's Republic of Korea",
    cost: 1,
    experience: 7,
    email: "leo@spaceman.nk",
    website: "http://thechive.com/2015/02/12/the-very-best-things-uttered-by-dr-leo-spaceman-33-photos/",
    description: "Hi, I'm Dr. Leo Spaceman. I'm a working physician with a degree from the Ho Chi Minh city School of medicine.",
    procedures: []
});

var dre = new Doctor({
    name: "Dr. Dre",
    specialty: "Chronic Pain",
    photoUrl: "http://financialjuneteenth.com/wp-content/uploads/2015/03/Will-Dr-Dre-ever-be-worth-1-billion-dollars-www.financialjuneteenth.com_-780x600.jpg",
    country: "Mexico",
    cost: 4,
    experience: 30,
    email: "dre@dre.biz",
    website: "www.beatsbydre.com",
    description: "Founder and current CEO of Aftermath Medicine and Beats Therapy.",
    procedures: []
});
var seuss = new Doctor({
    name: "Dr. Seuss",
    specialty: "Pediatrics",
    country: "Whoville",
    photoUrl: "https://historythings.com/wp-content/uploads/2016/06/635878853116833363-1573296988_Dr-Seuss-2.jpg",
    cost: 3,
    experience: 50,
    email: "cat@thehat.com",
    website: "www.seussville.com",
    description: "One fish, two fish, red fish, blue fish.",
    procedures: []
});
var pepper = new Doctor({
    name: "Dr. Pepper",
    specialty: "Homeopathic Medicine",
    photoUrl: "http://i.dailymail.co.uk/i/pix/2015/03/27/video-undefined-270D782300000578-743_636x358.jpg",
    country: "Peru",
    cost: 2,
    experience: 60,
    email: "twentythree@flavors.com",
    website: "www.drpepper.com",
    description: "Always one of a kind.",
    procedures: []
});

var rebirthing = new Procedure({
    name: "Rebirthing Therapy",
    cost: 100
});

var apitherapy = new Procedure({
    name: "Apitherapy",
    cost: 30
});

var ivf = new Procedure({
    name: "In Vitro Fertilization",
    cost: 1000
});

var hip = new Procedure({
    name: "Hip Replacement",
    cost: 8000
});

var angio = new Procedure({
    name: "Angiotherapy",
    cost: 10000
});

var shoulder = new Procedure({
    name: "Shoulder Surgery",
    cost: 3000
});

var rhino = new Procedure({
    name: "Rhinoplasty",
    cost: 3000
});

var crowns = new Procedure({
    name: "Dental Crowns, Caps and Veneers",
    cost: 150
});

var gastric = new Procedure({
    name: "Gastric Bypass",
    cost: 1500
});

var teeth = new Procedure({
    name: "Teeth Whitening",
    cost: 400
});

spaceman.procedures.push(rebirthing);
spaceman.procedures.push(apitherapy);
dre.procedures.push(hip);
dre.procedures.push(angio);
spaceman.procedures.push(ivf);
pepper.procedures.push(crowns);
pepper.procedures.push(teeth);
dre.procedures.push(shoulder);
seuss.procedures.push(gastric);
seuss.procedures.push(rhino);

spaceman.save();
dre.save();
pepper.save();
seuss.save().then(function() {
    process.exit();
});
