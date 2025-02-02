const app = require('express')();
const express = require('express');
const indexRoutes = require('./routes/index.routes');
const userRoutes = require('./routes/user.routes');


// Middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));

// Routes
app.use('/', indexRoutes);
app.use('/users', userRoutes);



module.exports = app;