const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const studentRoutes = require('./api/routes/students');

app.use(bodyParser.json());
app.use('/students', studentRoutes);

module.exports = app;
