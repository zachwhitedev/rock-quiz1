const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const RockscoreSchema = new Schema({
    username: {
        type: String,
        require: true
    },
    score: {
        type: Number,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Rockscore = mongoose.model('rockscore', RockscoreSchema);