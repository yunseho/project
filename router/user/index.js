const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
console.log(controller.seho);

router.get('/',controller.join);

module.exports = router;