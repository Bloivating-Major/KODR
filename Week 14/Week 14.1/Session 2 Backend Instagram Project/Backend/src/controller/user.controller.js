const User = require("../models/user.models");

const bcrypt = require("bcrypt");

const jwt = require("jsonwebtoken");

const config = require('../config/config');

module.exports.registerUserController = async (req, res)=>{
    try {
        const { username, email, password} = req.body;

        if(!username) {
            // status 400 means error from client side
            return res.status(400).json({ message: 'Username is required' });
        }
        if(!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
        if(!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
    
        const isUserExist = await User.findOne({
            $or: [{ username: username }, { email : email }]
        })
    
        if(isUserExist) {
            return res.status(400).json({ message: 'Username or Email already exists' });
        }
    
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const user = await User.create({
            username,
            email,
            password: hashedPassword,
        });
    
        const token =  jwt.sign({
            id: user._id,
            username: user.username,
            email: user.email
        }, config.JWT_SECRET);
    
        res.status(201).json({ token: token });
    
        // data verification if data is correct or no
        // then check if any user exists or not
        // then hash password
        // then create user
        // then create token
        // send res
    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});
    }
}

module.exports.loginUserController = async (req, res) => {

    try {
        
        const { email , password } = req.body;
    
        if(!email) {
            return res.status(400).json({ message: 'Email is required' });
        }
    
        if(!password) {
            return res.status(400).json({ message: 'Password is required' });
        }
    
        const isUserExist = await User.findOne({email});
        
        if(!isUserExist) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
       
        const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
    
        if(!isPasswordMatch) {
            return res.status(400).json({ message: 'Invalid Credentials' });
        }
    
        const token = jwt.sign({
            id: isUserExist._id,
            username: isUserExist.username,
            email: isUserExist.email
        }, config.JWT_SECRET);
    
        res.status(200).json({token , user : isUserExist})

        // get email and password
        // check if email is given or not
        // check if password is given or not
        // then check if user exist or not
        // then check if password match or not
        // then create token
        // send res
    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});   
    }

}

module.exports.profileUserController = async (req, res) => {
    try {
        const user = await User.findById(req.user._id).populate("posts")
        res.send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({message : "Internal Server Error"});
    }
}