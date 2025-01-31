const {Router} = require('express');
const userController = require('../controllers/user.controller');
const router = Router();

router.post('/register', userController.registerController);

router.post('/login', userController.loginController);


module.exports = router;