const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
    // rounds: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'Round'
    // },
    deleted: Boolean,
});

module.exports = mongoose.model('User', userSchema);