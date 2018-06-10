const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Task = new Schema({
    title: String,
    done: {
        type: Boolean,
        default: false
    }
});

module.exports = mongoose.model('Task', Task);