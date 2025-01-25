const express = require('express');
const router = express.Router();
const controller = require('../controllers/index.controller');

router.get('/', controller.indexController)

router.get('/create', controller.userController)

router.get('/users', controller.findAllUsers)




module.exports = router;