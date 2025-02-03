const jwt = require("jsonwebtoken");

module.exports = (req, res, next)=>{
    if(req.cookies.token === '') {
        return res.redirect('/login');}
    else {
    let data = jwt.verify(req.cookies.token, process.env.SECRET_KEY);
    req.user = data;
    }
    next();
}