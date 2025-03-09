import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import config from "../config/config.js";


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required"],
    unique: [true, "Username already exists"],
    trim: true,
    lowercase: true,
    minLength: [3, "Username must be at least 3 characters"],
    maxLength: [15, "Username must be at most 15 characters"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: [true, "Email already exists"],
    trim: true,
    lowercase: true,
    minLength: [6, "Email must be at least 6 characters"],
    maxLength: [40, "Email must be at most 40 characters"],
  },

  profileImage: {
    type: String,
    default:
      "https://i.pinimg.com/236x/54/db/c5/54dbc58a3014e8b438c3c8f149a410c9.jpg",
  },

  password: {
    type: String,
  },
});

// Hash Password Static Function can be used without object creation
userSchema.statics.hashPassword = async function (password) {
  if (!password) {
    throw new Error("Password is required");
  }

  const salt = await bcrypt.genSalt(10);

  return bcrypt.hash(password, salt);
};

// Compare Password is a Method we have to create a object to access this function.
userSchema.methods.comparePassword = async function (password) {
  if (!password) {
    throw new Error("Password is required");
  }

  if (!this.password) {
    throw new Error("Password is required");
  }

  return bcrypt.compare(password, this.password);
};

// Generate Token is a Method we have to create a object to access this function.
userSchema.methods.generateToken = function () {
  const token = jwt.sign(
    {
      _id: this._id,
      username: this.username,
      email: this.email,
    },
    config.JWT_SECRET,
    {
      expiresIn: config.JWT_EXPIRE,
    }
  );

  return token;
};

userSchema.statics.verifyToken = function (token) {
  if (!token) {
    throw new Error("Token is required");
  }

  return jwt.verify(token, config.JWT_SECRET);
};

const userModel = mongoose.model("user", userSchema);

export default userModel;
