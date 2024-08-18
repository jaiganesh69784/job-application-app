const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String, // In a real app, hash this before storing
    role: String, // employer, candidate
    resume: String,
    savedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
    appliedJobs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Job' }],
});

module.exports = mongoose.model('User', UserSchema);