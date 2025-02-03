const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  username: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
});

const User = mongoose.model("user", userModel);

module.exports = User;
