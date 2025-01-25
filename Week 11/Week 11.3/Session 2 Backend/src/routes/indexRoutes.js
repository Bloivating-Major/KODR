const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.indexController)

router.post('/create', controller.createController)

router.get('/users', controller.allUsersController)

router.get('/users/:userId' , controller.showProfileController);




module.exports = router;