const express = require('express');
const router = express.Router();
const boardRouter = require('./board/index');
const user = require('./user');
const main = require('./main')
const saying = require('./saying');



router.use('/user',user);
router.use('/',main);
router.use('/board',boardRouter);
router.use('/saying',saying);





module.exports = router;