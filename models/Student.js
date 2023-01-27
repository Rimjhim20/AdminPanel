// models/Student.js
const mongoose = require('mongoose');
const StudentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  cotitle: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },

  department: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  enroll: {
    type: String,
    required: true
  },
  university:{
    type: String,
    required: true
  }
,
  updated_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Student= mongoose.model('student', StudentSchema);