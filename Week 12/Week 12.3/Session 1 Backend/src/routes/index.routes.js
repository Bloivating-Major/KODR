const {Router} = require('express');
const router = Router();
const controller = require('../controllers/index.controller');

router.get('/' , controller.indexController);

/* 
General Routes
/about
/privacy-policy
/contact-us
/journey
/support

User Dedicated Routes
/register
/login
/profile
/feed
*/



module.exports = router;