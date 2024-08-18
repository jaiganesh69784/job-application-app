const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    job: { type: mongoose.Schema.Types.ObjectId, ref: 'Job' },
    applicant: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    coverLetter: String,
    status: {
        type: String,
        default: 'pending', // other statuses could be 'reviewed', 'accepted', 'rejected'
    },
    appliedDate: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Application', ApplicationSchema);