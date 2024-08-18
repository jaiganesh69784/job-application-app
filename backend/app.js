const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jobRoutes = require('./routes/jobs');
const userRoutes = require('./routes/users');
const applicationRoutes = require('./routes/applications');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api/jobs', jobRoutes);
app.use('/api/users', userRoutes);
app.use('/api/applications', applicationRoutes);

mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("MongoDB connected"))
    .catch(err => console.error("MongoDB connection error: ", err));

module.exports = app;