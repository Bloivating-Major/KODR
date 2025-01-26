const User = require('../models/user.model');
const Post = require('../models/post.model');
module.exports.indexController = (req, res)=>{
    res.render('index');
}

module.exports.createUserController = async (req, res)=>{
    const { username, bio , email, image} = req.body;

    const newUser = await User.create({
        username,
        bio,
        email,
        image,
    })

    res.redirect('/home');
    
}

module.exports.homeController = (req, res)=>{
    res.render('home');
}

