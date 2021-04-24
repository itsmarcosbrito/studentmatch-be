const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    unique: true
  },
  passwordHashAndSalt: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('User', schema);
