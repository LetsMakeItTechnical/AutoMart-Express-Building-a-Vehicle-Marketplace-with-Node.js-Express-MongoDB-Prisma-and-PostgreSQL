const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const vehicleRoutes = require('./routes/vehicle');

const app = express();

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.use('/vehicles', vehicleRoutes);

mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB...', err));

app.listen(3000, () => console.log('Server started on port 3000'));
