const express = require('express');
const indexRoutes = require('./routes/index.routes');




const app = express()


app.set('view engine', 'ejs')
app.set('views', 'src/views')


app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.use('/', indexRoutes);


module.exports = app