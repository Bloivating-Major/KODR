const express = require('express');
const app = express();
const indexRoute = require('./routes/index.routes');

app.set('view engine', 'ejs');
app.set('views' , './src/views');
app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/', indexRoute)

app.use('/', indexRoute )

module.exports = app;
