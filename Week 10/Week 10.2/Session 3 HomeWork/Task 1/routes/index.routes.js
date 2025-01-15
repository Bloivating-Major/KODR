const express = require('express');
const controller = require('../controllers/index.controller');

// adding router
const router = express.Router();

console.log("This Page is Running");

router.get('/', controller.indexController);
router.get('/hello', controller.helloController);

module.exports = router;