const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config/config')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [ true, 'Username is required' ],
        unique: [ true, 'Username is already taken' ],
        lowercase: [ true, 'Username must be in lowercase' ],
        minlength: [ 3, 'Username must be at least 3 characters long' ],
        maxlength: [ 20, 'Username must be at most 20 characters long' ],
        trim: true,
    },
    email: {
        type: String,
        required: [ true, 'Email is required' ],
        unique: [ true, 'Email is already taken' ],
        lowercase: [ true, 'Email must be in lowercase' ],
        trim: true,
    },

    password: {
        type: String,
        select: false,
    },
})

userSchema.statics.hashPassword = async (password) => {
    return await bcrypt.hash(password, 10)
}

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateToken = function () {
    return jwt.sign({ id: this._id }, config.JWT_SECRET, { expiresIn: '1d' })
}

userSchema.statics.verifyToken = function (token) {
    return jwt.verify(token, config.JWT_SECRET)
}

const userModel = mongoose.model('user', userSchema)


module.exports = userModel


