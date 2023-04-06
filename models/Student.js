const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  name: String,
  sex: Boolean,
  username: String,
  password: String,
  createRegister: Date,
  age: Number,
});

module.exports = mongoose.model("Student", studentSchema);
