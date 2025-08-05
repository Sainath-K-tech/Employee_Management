const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  e_id: Number,
  e_name: String,
  e_email: String,
  e_number: Number,
  e_gender: String,
  e_department: String,
  e_address: String,
});

module.exports = mongoose.model('Student', studentSchema);