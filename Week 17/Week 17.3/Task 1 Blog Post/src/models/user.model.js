// Imports
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const config = require('../config/config');

// Schema Creation
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Username is required'],
        unique: [true, 'Username already exists'],
        lowercase: [true, 'Username must be lowercase'],
        minlength: [3, 'Username must be at least 3 characters long'],
        maxlength: [20, 'Username must be at most 20 characters long'],
        trim: true
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email must be unique'],
        lowercase: [true , 'Email must be lowercase'],
        trim: true
    },
    password: {
        type: String,
    }
})

// Hash Password
userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10); // Used Bcrypt for password hashing
}

// Compare Password 
userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password); // Comparing hashed password with the one stored in the database
}

// Generate Token
userSchema.methods.generateToken = function (){
    return jwt.sign({ id: this._id }, config.JWT_SECRET, { expiresIn: '1d' }); // Using JWT for token generation
}

// Verify Token
userSchema.statics.verifyToken = function (token) {
    return jwt.verify(token, config.JWT_SECRET);
}


// Export userSchema
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;