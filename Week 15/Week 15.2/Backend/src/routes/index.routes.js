const express = require('express');

const router = express.Router();

const userMiddleware = require('../middlewares/user.middleware');

const indexController = require('../controller/index.controller');

router.get('/', indexController.indexController);
router.get('/feed', userMiddleware.authUser, indexController.feedController);


module.exports = router;