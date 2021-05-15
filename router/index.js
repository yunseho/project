const express = require('express');
const router = express.Router();
const board = require('./board');
const user = require('./user');
const main = require('./main')
const saying = require('./saying');
const user_join = require('./user_join');


router.use('/',main);
router.use('/user',user);
router.use('/board',board);
router.use('/saying',saying);
router.use('/user_join',user_join);

module.exports = router;