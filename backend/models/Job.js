const mongoose = require('mongoose');

const JobSchema = new mongoose.Schema({
    title: String,
    company: String,
    location: String,
    description: String,
    salary: String,
    type: String, // full-time, part-time, etc.
    category: String,
    postedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Job', JobSchema);