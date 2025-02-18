const express = require('express');
const router = express.Router();
const userMiddleware = require('../middlewares/user.middleware');
const postController = require('../controller/post.controller');

router.post('/create' , userMiddleware.authUser, postController.createPostController);

module.exports = router;
