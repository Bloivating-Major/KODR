const express = require('express')

const app = express()

const path = require('path');

const userRoute = require('./routes/user.routes');
const postRoute = require('./routes/post.routes');
const feedRoute = require('./routes/index.routes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "./public")));

app.use('/' , feedRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);

module.exports = app;