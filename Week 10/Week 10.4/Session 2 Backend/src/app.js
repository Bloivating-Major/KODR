const express = require('express');
const app = express();
const indexRoutes = require('./routes/index.routes');


app.use("/", indexRoutes)

module.exports = app;