const Post = require('../models/post.models');


module.exports.indexController = (req, res)=>{
    res.send('Instagram Application');
}
module.exports.feedController = async (req, res)=>{
    try {
        const feed = await Post.aggregate([
          {
            $lookup: {
              from: 'users', // collection name in MongoDB (should be lowercase plural)
              localField: 'author', // Post ID
              foreignField: '_id', // User's posts field
              as: 'authorDetails' // Attach user data as "author"
            }
          },
          { $unwind: '$authorDetails' }, // Flatten the author array
          {
            $lookup: {
              from: 'users', // Lookup users who liked the post
              localField: 'likes', // The 'likes' array contains user IDs
              foreignField: '_id', // Match with users' _id
              as: 'likedByUsers'
            }
          },
          {
            $project: {
              media: 1,
              caption: 1,
              likesCount: { $size: '$likes' }, // Count of likes
              likedBy: '$likedByUsers.username',
              author: {
                username: '$authorDetails.username',
                profileImage: '$authorDetails.profileImage',
              },
              createdAt: 1
            }
          },
          { $sort: { createdAt: -1 } } // Newest posts first
        ]);

    
        res.status(200).json({feed , username :req.user.username});
      } catch (error) {
        res.status(500).json({ message: 'Error fetching feed', error });
      }
}

module.exports.handleUpload = (req,res)=>{
  res.json({message: "File uploaded successfully", file: req.file});
}