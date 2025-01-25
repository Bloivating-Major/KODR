const express = require('express');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

// set view engine
app.set('view engine', 'ejs');  
// set views
app.set('views', './src/views')

// set routes
app.use('/', indexRoutes)

module.exports = app;