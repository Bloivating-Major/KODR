const express = require('express');
const app = express();
const indexRoute = require('./routes/index.routes');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname , '/views'));

app.use('/', indexRoute);


module.exports = app;