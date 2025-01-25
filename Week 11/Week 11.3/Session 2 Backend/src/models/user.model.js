const mongoose = require('mongoose');

// creatign schema it is a like a skeleton of user
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

// createing a model now using our schema

const User = mongoose.model("user", userSchema);
module.exports = User;