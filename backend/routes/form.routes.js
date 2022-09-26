const  router  = require('express').Router();
 const firstformController = require('../controllers/firstform.controller');
 const secondformController = require('../controllers/secondform.controller');


 
 router.post('/user',firstformController.submitFirstForm);
 router.post('/member',secondformController.submitSecondForm);

module.exports = router