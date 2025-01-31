const User = require("../models/user.model");

module.exports.indexController = (req, res) => {
  res.render("index");
};

module.exports.createController = async (req, res) => {
  const { name, email, image } = req.body;
  const user = new User({
    name,
    email,
    image,
  });
  await user.save();
  res.redirect("/read");
};

module.exports.readController = async (req, res) => {
  let users = await User.find();
  res.render("read", { users });
};

module.exports.deleteController = async (req, res) => {
  let users = await User.findOneAndDelete({ _id: req.params.id });
  res.redirect("/read");
};

module.exports.editController = async (req, res) => {
  let id = req.params.userId;
  let user = await User.findById(id);
  res.render("edit", { user });
};

module.exports.updateController = async (req, res) => {
  let { name, email, image } = req.body;
  let user = await User.findOneAndUpdate(
    { _id: req.params.userId },
    { name, email, image }
  );
  res.redirect("/read");
};
