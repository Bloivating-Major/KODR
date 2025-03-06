// Important Imports
const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const userMiddleware = require('../middlewares/user.middleware');


// User Registration Route
router.post('/register', userMiddleware.validateRegister, userController.registerUser);

// User Login Route
router.post('/login', userMiddleware.validateLogin, userController.loginUser);


// Export Route
module.exports = router;