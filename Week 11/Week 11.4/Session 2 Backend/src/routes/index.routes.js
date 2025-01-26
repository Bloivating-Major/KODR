const { Router } = require('express');
const  router = Router();
const controller = require('../controller/index.controller');

router.get('/', controller.indexController);

router.post('/create-user', controller.createUser);

router.get('/home' , controller.homeController)

module.exports = router;