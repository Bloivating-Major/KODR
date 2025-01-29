const User = require('../models/user.model');
const Post = require('../models/post.model');
module.exports.indexController = (req, res)=>{
    res.render('index');
}

module.exports.createUserController = async (req, res)=>{
    const { username, bio , email, image} = req.body;

    const newUser = await User.create({
        username,
        bio,
        email,
        image,
    })

    res.redirect('/home');
    
}

module.exports.homeController = async (req, res)=>{

    const posts = await Post.find({});

    res.render('home' , { posts});
}

module.exports.createPostController = (req, res)=>{
    res.render('createPost');
}

module.exports.createPost = async (req, res)=>{
    const { mediaImage, caption} = req.body;

    const newPost = await Post.create({
        mediaImage ,
        caption
    })

    res.redirect("/home");
 }