const {Router} = require('express');
const userController = require('../controllers/user.controller');
const router = Router();

router.get('/register', userController.renderRegister);
router.get('/login', userController.renderLogin);
router.get('/profile', userController.profileController);


router.post('/register', userController.registerController);
router.post('/login', userController.loginController);



module.exports = router;