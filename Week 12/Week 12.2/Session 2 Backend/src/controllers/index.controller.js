const userModel = require('../models/user.model');
const postModel = require('../models/post.model');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');

module.exports.indexController = (req, res) => {
    res.render('index');
}

module.exports.createController = async (req, res) => {

    const { username, bio, email, profileImage } = req.body;

    const newUser = await userModel.create({
        username,
        bio,
        email,
        profileImage
    })

    res.redirect('/home');


}

module.exports.homeController = async (req, res) => {

    const posts = await postModel.find({});

    res.render('home', { posts });

}

module.exports.createPostController = (req, res) => {
    res.render('create-post');
}

module.exports.createPost = async (req, res) => {

    const { mediaImage, caption } = req.body;

    const newPost = await postModel.create({
        mediaImage,
        caption
    })

    res.redirect('/home');

}

module.exports.likePost = async (req, res) => {

    const postId = req.params.postId;
    await postModel.findByIdAndUpdate(postId, {
        $inc: {
            likeCount: 1
        }
    })
    res.redirect('/home');

}