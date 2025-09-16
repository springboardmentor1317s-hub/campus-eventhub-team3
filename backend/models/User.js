
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  collegeOrUniversity: {
    type: String,
    required: true,
  },
  studentId: {
    type: String,
  },
  contactNumber: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['Student', 'Admin', 'Super Admin'],
    default: 'Student',
  },
});

module.exports = mongoose.model('User', UserSchema);
