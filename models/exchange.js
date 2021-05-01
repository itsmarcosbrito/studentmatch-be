const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new mongoose.Schema(
    {
        to: {
            type: Schema.Types.ObjectId,
            ref: 'Asset',
            required: true
        },
        from: {
            type: Schema.Types.ObjectId,
            ref: 'Asset',
            required: true
        },

});

module.exports = mongoose.model('Exchange', schema);



