import userModel from "../models/user.model.js";

export const createUser = async ({ username, email, password }) => {
  if (!username || !email || !password) {
    throw new Error("All fields are required [username, email, password]");
  }

  const isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    throw new Error("User already exists");
  }

  const hashedPassword = await userModel.hashPassword(password);

  const user = new userModel({
    username,
    email,
    password: hashedPassword,
  });

  await user.save();

  delete user._doc.password; // We don't want to send password to frontend.

  return user;
};

export const loginUser = async ({ email, password }) => {
  const user = await userModel.findOne({
    email
  })

  if(!user){
    throw new Error("Invalid Credentials");
  }

  const isPasswordCorrect = await user.comparePassword(password)

  if(!isPasswordCorrect){
    throw new Error("Invalid Credentials");
  }

  delete user._doc.password;

  return user;
}
