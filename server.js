const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const sequelize = require('./models');
const router = require('./router')
console.log(router);
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});

app.use('/',router);

app.listen(3000,()=>{
    console.log(`start server 3000`);
})