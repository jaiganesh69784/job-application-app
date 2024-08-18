const express = require('express');
const User = require('../models/User');

const router = express.Router();

// Register a new user
router.post('/register', async(req, res) => {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
});

// Login user (simplified)
router.post('/login', async(req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user && user.password === req.body.password) { // Never store plain passwords in production
        res.json(user);
    } else {
        res.status(401).json({ message: 'Invalid credentials' });
    }
});

module.exports = router;