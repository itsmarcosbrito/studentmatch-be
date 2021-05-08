const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema({
  category: {
    type: String,
    trim: true
  },
  name: {
    type: String,
    required: true
  },
  image: {
    type: String
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
});


module.exports = mongoose.model('Asset', schema);

