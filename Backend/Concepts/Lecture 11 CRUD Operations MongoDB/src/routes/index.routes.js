const {Router} = require('express');
const router = Router();
const controller = require('../controller/index.controller');


router.get('/', controller.indexController);

router.get('/create', controller.createController
);

router.get('/update', controller.updateController);

router.get('/read', controller.readController);

router.get('/delete', controller.deleteController);

module.exports = router;