const mongoose = require('mongoose');
const Schema = mongoose.Schema;

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
  },
  image: {
    type: String
  },
  assets: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Asset'
    }
  ],
  exchanges: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Exchange'
    }
  ]
});

module.exports = mongoose.model('User', schema);
