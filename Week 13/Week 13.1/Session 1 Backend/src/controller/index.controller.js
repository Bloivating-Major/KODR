const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.feedController = (req, res) => {
  try {
    const token = req.cookies.token;

    if (!token) return res.redirect("/user/register");

    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    res.render("feed");
  } catch (err) {
    res.redirect("/user/register");
  }
};
