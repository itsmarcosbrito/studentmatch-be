const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  up: {
    type: Number,
    default: 0,
    min: 0
  },
  down: {
    type: Number,
    default: 0,
    min: 0
  },
  user: {
    type: Schema.Types.UserId,
    ref: 'User',
    required: true
  },

});

module.exports = mongoose.model('User', schema);
