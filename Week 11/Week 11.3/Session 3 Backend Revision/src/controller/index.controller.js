const User = require('../models/user.model');

module.exports.indexController = (req, res)=>{
    res.render('index');
};

module.exports.createController = async (req, res)=>{
    const {username, email, bio, image} = req.body;

    const newUser = await  User.create({
        username,
        email,
        bio,
        image,
    })
    res.redirect('users')
} 

module.exports.showUsersController = async (req, res)=>{
    const users = await User.find();
    res.render('users', {users} );
}