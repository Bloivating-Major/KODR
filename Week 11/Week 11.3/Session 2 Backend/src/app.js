const express = require('express');
const indexRoutes = require('./routes/indexRoutes');

const app = express();

// set view engine
app.set('view engine', 'ejs');  
// set views
app.set('views', './src/views')

app.use(express.json());
app.use(express.urlencoded({ extended : true}));

// set routes


app.use('/', indexRoutes)

module.exports = app;