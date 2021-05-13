const express = require('express');
const router = express.Router();
const controller = require('./board.controller')

router.get('/list',controller.list);

module.exports = router;