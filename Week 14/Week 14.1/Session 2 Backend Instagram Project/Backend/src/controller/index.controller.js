const Post = require('../models/post.models');


module.exports.indexController = (req, res)=>{
    res.send('Instagram Application');
}
module.exports.feedController = async (req, res)=>{
    const posts = await Post.find();

    res.status(200).json({
        message : "Post Fetched Successfully",
        posts
    })
}