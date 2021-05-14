const express = require('express');
const router = express.Router();
const controller = require('./saying.controller');

router.use('/',controller.index);

module.exports = router;