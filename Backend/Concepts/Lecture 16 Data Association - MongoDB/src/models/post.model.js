const mongoose = require('mongoose')

const postModel = new mongoose.Schema({
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    },
    date : {
        type : String,
        default : Date.now
    },
    content : {
        type : String,
    },
    likes : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'user'
    }],
})

const Post = mongoose.model('post', postModel);

module.exports = Post;