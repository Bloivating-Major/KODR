const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    if(req.cookies.token === '') {
        console.log("Cannot Login User");
        return res.redirect('/login');}
    else {
    console.log("User Login Successfull");
    let data = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    req.user = data;
    }
    next();
}