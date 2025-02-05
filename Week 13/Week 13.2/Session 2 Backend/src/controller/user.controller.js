const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.registerController = (req, res) => {
  res.render("register");
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    let foundUser = await User.findOne({ email });
    if (foundUser) return res.status(500).send("User Already Exists");

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

    res.redirect("/feed");
  } catch {
    (err) => console.log(err);
  }
};

module.exports.loginController = (req, res) => {
  res.render("login");
};

module.exports.postLoginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    let user = await User.findOne({ email });
    if (!user) return res.status(401).send("Invalid Email or Password");

    let validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword)
      return res.status(401).send("Invalid Email or Password");

    let token = jwt.sign(
      { email: email, userid: user._id },
      process.env.SECRET_KEY
    );

    res.cookie("token", token);

    res.redirect("/feed");
  } catch {
    (err) => console.log(err);
  }
};
