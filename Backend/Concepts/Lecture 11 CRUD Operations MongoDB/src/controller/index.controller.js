const User = require('../models/user.model');

module.exports.indexController = (req, res)=>{
    res.send('Hello World!');
}

module.exports.createController = async (req, res)=>{
    let createdUser = await User.create({
        username : "Soham",
        email : "soham@gmail.com",
        password : "12345"
    })

    res.send(createdUser);
}

module.exports.updateController = async (req, res)=>{
    const updatedUser = await User.findOneAndUpdate({username : "Sambhav"}, {username : "Sambhav Rupesh Wakhariya"}, {new : true})   
    res.send(updatedUser);
}

module.exports.readController = async (req, res)=>{
    const users = await User.findOne({username : "Soham"});
    res.send(users);
}

module.exports.deleteController = async (req, res)=>{
    const users = await User.findOneAndDelete({username : "Soham"});
    res.send(users);
}