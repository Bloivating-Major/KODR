const express = require('express')
const app = express()
// importing controller
const indexController = require('../controllers/index.controller');

// importing routes now this is dynamic 
const indexRoutes = require('../routes/index.routes');


app.use('/', indexRoutes)


module.exports = app;