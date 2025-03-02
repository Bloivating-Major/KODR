const Post = require('../models/post.models');

module.exports.createPost = async (req, res) => {

    const post = await Post.create({
          caption: req.body.caption,
          media: req.body.image,
          user: req.user._id
    })

    
    res.send({ data: req.body, user: req.user })
}