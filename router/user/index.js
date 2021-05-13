const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
console.log(controller.seho);

router.get('/join',controller.join);

module.exports = router;