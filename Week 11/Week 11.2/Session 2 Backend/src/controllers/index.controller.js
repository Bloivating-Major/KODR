const User = require('../models/user.model');

module.exports.indexController= (req, res)=>{
    res.render('index')
};

module.exports.userController = async (req, res)=>{
    const {username, email, bio, image} = req.query;

    const newUser = await User.create({
        username,
        email,
        bio,
        image,
    })

    console.log(newUser);
    res.redirect('users')
};

module.exports.findAllUsers = async (req, res)=>{
    const profiles = await User.find();
    console.log(profiles);
    res.render('users', {profiles})
}

