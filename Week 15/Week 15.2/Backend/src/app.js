const express = require('express')

const app = express()
const cors = require('cors');

const path = require('path');

app.use(cors()); // Allow All Origins
const userRoute = require('./routes/user.routes');
const postRoute = require('./routes/post.routes');
const feedRoute = require('./routes/index.routes');

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/images'));
app.use(express.static(path.join(__dirname, "/public")));

app.use('/' , feedRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);

module.exports = app;