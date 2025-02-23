const express = require('express');
const router = express.Router();
const userController = require('../controller/user.controller');
const userMiddleware = require('../middlewares/user.middleware');

router.post('/register' , userController.registerUserController);

router.post('/login', userController.loginUserController);

router.get('/profile', userMiddleware.authUser , userController.profileUserController);

module.exports = router