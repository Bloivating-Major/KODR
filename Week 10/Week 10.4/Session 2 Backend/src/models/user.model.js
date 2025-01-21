const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username : {
        type : String,
    },
    email : {
        type : String,
    },
    password : {
        type : String,
    }
})

const userModal = mongoose.model("users", userSchema);