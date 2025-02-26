const jwt = require("jsonwebtoken");
const config = require("../config/config");
const User = require("../models/user.models");


// we pass 3 things in our middleware req, res and next
// then we will take out our token from headers
module.exports.authUser = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1]; // here we will receive our token

    if (!token) return res.status(401).json({ message: "Unauthorized" }); // 401 Unauthorized

    const decoded = jwt.verify(token, config.JWT_SECRET); // decode the token

    const user = await User.findOne({_id : decoded.id }) // get the user 

    req.user = user; // attach the user to the request object for use in other routes
    return  next(); // move to the next middleware or route handler.

  } catch (err) {
    return res.status(401).json({ message: "Unauthorized" }); // 401 Unauthorized
  }
};
