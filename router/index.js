const express = require('express');
const router = express.Router();
const board = require('./board');
const user = require('./user');
const main = require('./main')


router.use('/',main);
router.use('/user',user);
router.use('/board',board);


module.exports = router;