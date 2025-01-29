const {Router} = require('express');
const controller = require('../controller/index.controller');
const route = Router();

route.get('/', controller.indexController);

route.post('/create-user', controller.createUserController);

route.get('/home', controller.homeController);

route.get('/create-post', controller.createPostController);

route.post('/create-post' , controller.createPost);



module.exports = route;