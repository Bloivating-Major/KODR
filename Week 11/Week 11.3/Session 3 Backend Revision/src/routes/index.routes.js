const express = require('express');
const router = express.Router();
const controller = require('../controller/index.controller');

router.get('/', controller.indexController);

router.post('/create', controller.createController);

router.get('/users', controller.showUsersController);

module.exports = router;