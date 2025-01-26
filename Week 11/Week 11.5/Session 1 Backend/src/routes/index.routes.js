const {Router} = require('express');
const controller = require('../controller/index.controller');
const route = Router();

route.get('/', controller.indexController);

route.post('/create-user', controller.createUserController);

route.get('/home', controller.homeController);



module.exports = route;