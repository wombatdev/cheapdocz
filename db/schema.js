var mongoose = require("mongoose");

var DoctorSchema = new mongoose.Schema(
  {
    name: String,
    specialty: String,
    country: String,
    cost: Number,
    experience: Number,
    email: String,
    website: String,
    description: String
  }
);

mongoose.model("Doctor", DoctorSchema);
mongoose.connect("mongodb://localhost/cheapdocz");
module.exports = mongoose;
