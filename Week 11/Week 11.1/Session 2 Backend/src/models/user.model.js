const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    bio : {
        type : String,
    },
    image : {
        type : String,
    }
})

const User = mongoose.model(userSchema);
module.exports = User;