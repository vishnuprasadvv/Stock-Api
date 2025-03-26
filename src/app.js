require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const stockRoutes = require('./routes/stockRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.error('MongoDB error', err.message));

    //middleware
app.use(express.json());

//routes
app.use('/api', stockRoutes);

app.get('/', (req, res) => {
    res.send('API is running');
});

module.exports = app;