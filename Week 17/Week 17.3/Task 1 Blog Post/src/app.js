// All the necessary imports
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const userRoutes = require('./routes/user.routes');
const blogRoutes = require('./routes/blog.routes');

// Creating an instance of express
const app = express();

// Middleware for logging requests

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware for parsing cookies
app.use(cookieParser());

// Importing routes
app.use('/api/v1/user', userRoutes )
app.use('/api/v1/blog',blogRoutes )


// Exporting the app for use in other files
module.exports = app;
