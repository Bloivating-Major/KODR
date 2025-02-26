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
        caption,
        author : req.user.id
    });

    await User.findByIdAndUpdate(req.user.id, {
        $push: {posts: newPost._id}
    })

    res.status(201).json({post: newPost});
 
}

module.exports.likePostController = async (req, res) => {
    const { postId } = req.params;
    const userId = req.user.id; // Assuming user ID is attached to req.user from middleware
  
    try {
      const post = await Post.findById(postId);
  
      if (!post) return res.status(404).json({ message: "Post not found" });
  
      if (post.likes.includes(userId)) {
        // Unlike the post
        post.likes.pull(userId);
      } else {
        // Like the post
        post.likes.push(userId);
      }
  
      await post.save();
      res.status(200).json({ message: "Post liked/unliked successfully", post });
    } catch (error) {
      res.status(500).json({ message: "Error updating like status", error });
    }
  };