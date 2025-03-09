import { body } from "express-validator";
import redis from "../services/redis.service.js";
import userModel from "../models/user.model.js";
// User registration validation

export const registerUserValidation = [
    body('username')
        .isString()
        .withMessage('Username must be a string')
        .isLength({ min: 3, max: 15 })
        .withMessage('Username must be between 3 and 15 characters')
        .custom((value) => value === value.toLowerCase()) // This is our Custom Validation
        .withMessage('Username must be lowercase'),
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
]

// User Login Validation
export const loginUserValidation = [
    body('email')
        .isEmail()
        .withMessage('Email must be a valid email'),
    body('password')
        .isString()
        .withMessage('Password must be a string')
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 characters"),
]

export const authUser = async (req, res, next) => {
    try {
        const token = req.cookies.token || req.headers.authorization?.split(' ')[ 1 ];

        if (!token) {
            return res.status(401).json({ message: 'Unauthorized' });
        }

        // const isTokenBlackListed = await redis.get(`blacklist:${token}`);

        // if (isTokenBlackListed) {
        //     return res.status(401).json({ message: 'Unauthorized' })
        // }

        const decoded = userModel.verifyToken(token);

        let user = await redis.get(`user:${decoded._id}`)

        if (user) {
            user = JSON.parse(user)
        }

        if (!user) {
            user = await userModel.findById(decoded._id)
            if (user) {
                delete user._doc.password;
                await redis.set(`user:${decoded._id}`, JSON.stringify(user))
            } else {
                return res.status(401).json({ message: 'Unauthorized' });
            }
        }

        req.user = user;
        // req.tokenData = { token, ...decoded };

        return next();

    } catch (err) {
        console.error(err);
        res.status(401).json({ message: err.message });
    }
}