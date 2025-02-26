const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    media : {
        type : String,
        required : true
    },
    caption : {
        type : String,
        required : true
    },
    likes : [
        {
            type: mongoose.Types.ObjectId,
            ref: 'user'
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
      },
      author : {
        type : mongoose.Types.ObjectId,
        ref : 'user',
        required : true
      }

})

const Post = mongoose.model('post', postSchema);

module.exports = Post;