const {Router} = require('express')

const userRoute = Router();

const userController = require('../controller/user.controller');

userRoute.get('/register',userController.registerController);
userRoute.post('/register', userController.postRegisterController);
userRoute.get('/login', userController.loginController);
userRoute.post('/login', userController.postLoginController);

module.exports = userRoute;