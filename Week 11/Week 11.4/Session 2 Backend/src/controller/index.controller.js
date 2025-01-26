const User = require('../model/user.model');

module.exports.indexController = (req, res)=>{
    res.render('index');
};

module.exports.createUser = async (req, res)=>{
    const { username, email, bio, image} = req.body;

    const newUser = await User.create({
        username,
        email,
        bio,
        image,
    })

    res.redirect('/home');
}

module.exports.homeController = (req, res)=>{
    res.render('home');
}