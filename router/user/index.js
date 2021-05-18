const express = require('express');
const router = express.Router();
const controller = require('./user.controller');




router.get('/join',controller.join)
router.get('/',controller.login);
router.post('/join_check',controller.join_check);
router.get('/userid_check',controller.userid_check);
router.get('/userid_value',controller.userid_value);



module.exports = router;