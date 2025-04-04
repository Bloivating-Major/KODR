const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String, // type
        required : true, // need it compulsory
        minlength : [3, "Username must be at least 3 characters"],
        maxlength : [20, "Username must be at most 20 characters"],
        unique : true,
        trim : true
    },
    email : {
        type : String,
        required : true,
        minlength : [6, "Email must be at least 6 characters"],
        maxlength : [50, "Email must be at most 50 characters"],
        unique : true,
        trim : true
    },
    password : {
        type : String,
    },
    profileImage : {
        type : String,
        default : 'defaultProfilePic.jpg'
    },
    posts : [
        {
            type : mongoose.Types.ObjectId,
            ref : 'post'
        }
    ]
})

const User = mongoose.model('user', userSchema);

module.exports = User;