const {Router} = require('express');
const router = Router();
const controller = require('../controller/index.controller');

router.get('/', controller.indexController );

module.exports = router;