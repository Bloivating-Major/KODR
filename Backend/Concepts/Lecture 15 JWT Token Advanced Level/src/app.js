const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('./model/user.model');
const app = express();

app.use(cookieParser()); // Middleware to parse cookies
app.use(express.json()); // Middleware to parse JSON data
app.use(express.urlencoded({ extended: true })); // Middleware to parse URL encoded data

app.set('view engine', 'ejs'); // Setting view engine to EJS
app.set('views', path.join(__dirname, 'views')); // Setting views directory


app.get('/', (req, res)=>{
    res.render('index')
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', async (req,res)=>{
   let user = await User.findOne({email : req.body.email});
   if(!user) return res.send("Something went wrong");
   if(await bcrypt.compare(req.body.password, user.password)){
    // Token Creation
    let token =  jwt.sign({email: user.email}, "secretkey");
    res.cookie('token', token);


    res.send("Yes You can login")
   }else res.send("Something went wrong");
})

app.post('/create', async (req, res)=>{
    const {username, email, password} = req.body;

    const hashed = await bcrypt.hash(password, 10);

    let user = await User.create({
        username,
        email,
        password : hashed
    })

    // Token Creation
    let token =  jwt.sign({email}, "secretkey");
    res.cookie('token', token);

    res.redirect('/login')
})

app.get('/logout', (req,res)=>{
    res.cookie('token', '');
    res.redirect('/');
})

module.exports = app;