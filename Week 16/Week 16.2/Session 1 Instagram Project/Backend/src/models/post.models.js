const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    media : {
        type : Object,
    },
    caption : {
        type : String,
    },
      author : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
      }

})

const Post = mongoose.model('post', postSchema);

module.exports = Post;