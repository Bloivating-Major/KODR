const mongoose  = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : [true, "Username is required"],
        unique : [true, "Username already exists"],
        minlength : [3, "Username must be at least 3 characters"],
    },
    email : {
        type : String,
        required : [true, "Email is required"],
        minlength : [6, 'Email must be at least 6 characters'],
    },
    password : {
        type : String,
    }
})

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;