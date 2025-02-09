const User = require("../models/user.model");
const Post = require("../models/post.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.registerController = async (req, res) => {
  const { username, email, password } = req.body;

  let foundUser = await User.findOne({ email });

  if(foundUser){
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if(isMatch) {
      let token = jwt.sign(
        { email: foundUser.email, userid: foundUser._id },
        process.env.SECRET_KEY,
      );

      res.cookie("token", token, { httpOnly: true, secure: true });
      return res.redirect("/profile");
    } else {
      return res.status(400).json({ error: "Incorrect password" });
    }
  }

  let hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    username,
    email,
    password: hashed,
  });

  let token = jwt.sign(
    { email: email, userid: user._id },
    process.env.SECRET_KEY
  );

  res.cookie("token", token);

  res.redirect("/login");
};

module.exports.loginController = (req, res) => {
  res.render("login");
};

module.exports.handleLoginController = async (req, res) => {
    const { email, password } = req.body;

    let user = await User.findOne({ email });
    if (!user) return res.redirect('/');
  
    if(await bcrypt.compare(password, user.password)){
        let token = jwt.sign(
            { email: email, userid: user._id },
            process.env.SECRET_KEY
          );
        
          res.cookie("token", token);
        res.redirect('/profile');
    } 
    else return res.redirect('/login');
};

module.exports.logout = (req,res)=>{
    res.cookie('token', '');
    res.redirect('/login');
}

module.exports.profileController = async (req, res)=>{
    let user =  await User.findOne({email : req.user.email}).populate("posts");
    console.log(user.profilepic);
    res.render('profile' , {user});
    
}

module.exports.postController = async (req, res)=>{
  let user = await User.findOne({email: req.user.email});
  let {content} = req.body;

  let post = await Post.create({
    user : user._id,
    content
  })

  user.posts.push(post._id);
  await user.save();
  res.redirect('/profile')
}

module.exports.likeController = async (req, res)=>{
    let post = await Post.findOne({_id : req.params.id}).populate('user');

    if(post.likes.indexOf(req.user.userid) === -1) {
    post.likes.push(req.user.userid);
    }
    else {
      post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }
    await post.save();
    res.redirect('/profile');
}

module.exports.editController = async (req, res)=>{
  let post = await Post.findOne({_id : req.params.id}).populate('user');
  res.render('edit' , {post});
}

module.exports.updateController = async (req, res)=>{
  let post = await Post.findOneAndUpdate({_id : req.params.id}, {content : req.body.content});
  res.redirect('/profile');
}

module.exports.deleteController = async (req, res)=>{
  let post = await Post.findOneAndDelete({_id : req.params.id});
  res.redirect('/profile');
}

module.exports.profileUploadController = (req, res)=>{
  res.render('profileUpload');
}

module.exports.postProfileUploadController = async (req, res)=>{
  let user = await User.findOne({email: req.user.email});
  user.profilepic = req.file.filename;
  await user.save();
  res.redirect('/profile');
}