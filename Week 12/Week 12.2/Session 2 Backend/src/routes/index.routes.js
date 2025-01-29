const { Router } = require('express');
const controller = require('../controllers/index.controller');
const router = Router();


router.get('/', controller.indexController);

router.post('/create', controller.createController);

router.get('/home', controller.homeController);

router.get('/create-post', controller.createPostController);

router.post('/create-post', controller.createPost)

router.get('/like/:postId', controller.likePost)

module.exports = router;