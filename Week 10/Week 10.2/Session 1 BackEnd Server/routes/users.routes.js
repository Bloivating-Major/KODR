const express = require('express');
const userControl = require('../controllers/user.controller');
const userRouter = express.Router();

userRouter.get('/', userControl.userController);

module.exports = userRouter;