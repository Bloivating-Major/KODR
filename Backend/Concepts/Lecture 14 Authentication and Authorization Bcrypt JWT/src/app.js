const express = require('express');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const app = express();
app.use(cookieParser()); // Middleware to parse cookies

// Using JWT Token in our api
app.get('/', (req, res)=>{
    let token = jwt.sign({email : "stark@gmail.com"}, "secretkey")
    res.cookie('token', token);
    res.send("Done");
})

app.get('/read', (req, res)=>{
    const data = jwt.verify(req.cookies.token, "secretkey");
    console.log(data);
})

module.exports = app;