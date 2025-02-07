const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required : true,
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
        default : './public/images/uploads/defaultProfilePic.jpg',
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    }],
    followers : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }]
})