const User = require('../models/user.model');

module.exports.indexController= (req, res)=>{
    res.render('index')
};

module.exports.createController = async (req, res)=>{
    const {username, email, bio, image} = req.body;

    const newUser = await User.create({
        username,
        email,
        bio,
        image,
    })

    console.log(newUser);
    res.redirect('users')
};

module.exports.allUsersController = async (req, res)=>{
    const profiles = await User.find();
    console.log(profiles);
    res.render('users', {profiles})
}


module.exports.showProfileController = async (req, res)=> {
    const id = req.params.userId;
    const user = await User.findById({
        _id: id,
    });
    res.render('profiles' , {user});
}
