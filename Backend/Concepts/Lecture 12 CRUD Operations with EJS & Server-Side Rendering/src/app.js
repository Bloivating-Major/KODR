const express = require('express')
const indexRoute = require('./routes/index.routes');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', indexRoute);

module.exports = app;
