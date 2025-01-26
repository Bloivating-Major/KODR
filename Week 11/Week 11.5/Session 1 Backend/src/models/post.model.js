const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    mediaImage : {
        type : String,
    },
    caption : {
        type : String,
    },
    likeCount : {
        type : Number,
    }
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;