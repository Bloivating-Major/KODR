const express = require('express');
const routes = require('../routes/index.route');

const app = express();

app.use(express.json());

app.use('/', routes);
app.use((req, res)=>{
    res.status(404).json({ error: 'Page not found'});  // 404 not found error handling
})

module.exports = app;