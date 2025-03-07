// Imports
const userModel = require('../models/user.model');

module.exports.authUser = async (req, res, next)=>{
    // Check if user is authenticated
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    // If token is not provided, return 401 Unauthorized response.  else, continue
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    try {
        // Decode the token
        const decoded = userModel.verifyToken(token);
        req.user = await userModel.findById(decoded.id);
        next(); // move to the next middleware or route handler. 
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Unauthorized" }); // 401 Unauthorized
    }
}