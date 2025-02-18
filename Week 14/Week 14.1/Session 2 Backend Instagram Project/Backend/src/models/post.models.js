const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    media : {
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    }
})

const Post = mongoose.model('post', postSchema);

module.exports = Post;