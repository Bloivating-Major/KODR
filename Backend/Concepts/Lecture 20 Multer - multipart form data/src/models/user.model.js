const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    },
    posts : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'post'
    }],
})

const User = mongoose.model('user', userModel);

module.exports = User;