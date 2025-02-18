const Post = require('../models/post.models');
const User = require('../models/user.models');

module.exports.createPostController = async (req, res)=>{
    const { media , caption} = req.body;

    if(!media){
        return res.status(400).json({message : "Media is required"});
    }

    if(!caption){
        return res.status(400).json({message : "Caption is required"});
    }

    const newPost = await Post.create({
        media,
        caption
    });

    await User.findByIdAndUpdate(req.user._id, {
        $push: {posts: newPost._id}
    })

    res.status(201).json({post: newPost});
 
}