const express = require('express');
const router = express.Router();
const board = require('./board');
const user = require('./user');
const main = require('./main')
const saying = require('./saying');


router.use('/',main);
router.use('/user',user);
router.use('/board',board);
router.use('/saying',saying);

module.exports = router;