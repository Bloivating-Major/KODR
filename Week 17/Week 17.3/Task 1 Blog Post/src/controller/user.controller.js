// Imports
const userModel = require('../models/user.model');

module.exports.registerUser = async (req, res)=>{
    const {username, email, password} = req.body;

    try{
        // Take Password Hash It
        const hashedPassword = await userModel.hashPassword(password);

        // Create User
        const newUser = await userModel.create({
            username,
            email,
            password: hashedPassword,
        });

        // Generate JWT Token
        const token = newUser.generateToken();

        // Delete User Password
        delete newUser._doc.password;

        // Send User Data and JWT Token
        return res.status(201).json({token, user: newUser});

    }catch(err){
        console.error(err);
        return res.status(500).json({message: 'Server Error'});
    }

}

module.exports.loginUser = async (req, res) => {
    const {email, password} = req.body;
    
    try{
        // Find User by Email
        const user = await userModel.findOne({email});

        // If User Not Found
        if(!user){
            return res.status(404).json({message: "User Not Found"});
        }
        
        // Compare Password with Hashed Password
        const isMatch = await user.comparePassword(password);

        // Verify Password Correct or Not
        if(!isMatch){
            return res.status(401).json({message: "Invalid Credentials"});
        }

        // Generate JWT Token
        const token = user.generateToken();

        // Send User Data and JWT Token delete password
        delete user._doc.password;

        return res.status(200).json({token, user});
        
    }catch(err){
        console.error(err);
        return res.status(500).json({message: 'Server Error'});
    }
}