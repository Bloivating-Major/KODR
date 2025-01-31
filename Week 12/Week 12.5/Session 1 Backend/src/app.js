const express = require('express');
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);


module.exports = app;