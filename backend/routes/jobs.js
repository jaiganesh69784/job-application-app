const express = require('express');
const Job = require('../models/Job');

const router = express.Router();

// Get all jobs
router.get('/', async(req, res) => {
    const jobs = await Job.find();
    res.json(jobs);
});

// Get job by ID
router.get('/:id', async(req, res) => {
    const job = await Job.findById(req.params.id);
    res.json(job);
});

// Post a new job (employer only)
router.post('/', async(req, res) => {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
});

// Update job
router.put('/:id', async(req, res) => {
    const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedJob);
});

// Delete job
router.delete('/:id', async(req, res) => {
    await Job.findByIdAndDelete(req.params.id);
    res.status(204).end();
});

module.exports = router;