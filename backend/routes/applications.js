const express = require('express');
const Application = require('../models/Application');

const router = express.Router();

// Apply for a job
router.post('/', async(req, res) => {
    const newApplication = new Application(req.body);
    await newApplication.save();
    res.status(201).json(newApplication);
});

// Get all applications for a job
router.get('/job/:jobId', async(req, res) => {
    const applications = await Application.find({ job: req.params.jobId });
    res.json(applications);
});

// Get all applications for a user
router.get('/user/:userId', async(req, res) => {
    const applications = await Application.find({ applicant: req.params.userId });
    res.json(applications);
});

module.exports = router;