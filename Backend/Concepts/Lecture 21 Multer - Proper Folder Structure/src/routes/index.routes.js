const {Router} = require('express');

const Route = Router();

const indexController = require('../controller/index.controller');

const authMiddleware = require('../middleware/authMiddleware');

const upload = require('../config/multer.config');



Route.get('/', indexController.indexController);
Route.post('/register', indexController.registerController);

Route.get('/login' , indexController.loginController);
Route.post('/login', indexController.handleLoginController);

Route.get('/logout', indexController.logout);

// Protected Route
Route.get('/profile' , authMiddleware, indexController.profileController);
Route.post('/post', authMiddleware, indexController.postController);
Route.get('/profile/upload', authMiddleware, indexController.profileUploadController)
Route.post('/profile/upload', authMiddleware, upload.single("image"), indexController.postProfileUploadController)

Route.get('/like/:id', authMiddleware, indexController.likeController);
Route.get('/edit/:id', authMiddleware, indexController.editController);
Route.post('/update/:id', authMiddleware, indexController.updateController);
Route.get('/delete/:id', authMiddleware, indexController.deleteController);
module.exports = Route;