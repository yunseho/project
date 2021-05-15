const express = require('express');
const router = express.Router();
const controller = require('./user_join.controller');

router.get('/',controller.join);

module.exports = router;