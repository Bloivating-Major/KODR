const express = require('express');

const router = express.Router();

const upload = require('../utils/multer');

const userMiddleware = require('../middlewares/user.middleware');

const indexController = require('../controller/index.controller');

router.get('/', indexController.indexController);
router.get('/feed', userMiddleware.authUser, indexController.feedController);
router.post('/upload', upload.single("file"), indexController.handleUpload);


module.exports = router;