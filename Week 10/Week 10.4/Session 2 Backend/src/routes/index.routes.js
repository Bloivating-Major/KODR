const express = require('express');
const router = express.Router();
const indexController = require('../controllers/index.controller');


router.get('/', indexController.indexController)

router.get('/register', indexController.registerController);

module.exports = router;