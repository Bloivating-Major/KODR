const express = require('express');
const controller = require('../controllers/index.controller');
const router = express.Router();

console.log("This is Running");

router.get('/', controller.indexController);
router.get('/about', controller.aboutController);

module.exports = router;