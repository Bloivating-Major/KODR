const User = require('../models/user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.registerController = async (req, res)=>{
    const {username, email, password} = req.body;

    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        email,
        password: hashedPassword,
    })

    res.status(201).json({
        user,
        message : "User created successfully",
    })
}

module.exports.loginController = async (req, res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message: "Invalid Email or Password"});
        }

        const isMatched = await bcrypt.compare(password, user.password)

        if(!isMatched){
            return res.status(400).json({message: "Invalid Email or Password"});
        }

        const token = jwt.sign({_id: user._id}, process.env.JWT_SECRET);

        res.status(200).json({token, message: "User login successfully"})

    }catch(err){
        res.status(400).json({message: err.message});
    }
}

module.exports.profileController = async (req, res)=>{
    try{
        const token = req.headers.authorization?.split(" ")[1];
        console.log(token);
        if(!token){
            return res.status(400).json({message: "Token is required"});
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        const user = await User.findOne({_id: decode._id});

        res.status(200).json({user, message: "User profile"})
    }catch(err){
        res.status(400).json({message: err.message});
    }
}
