const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const {sequelize} = require('./models');
const router = require('./router')
const {User} = require('./models');

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

sequelize.sync({ force:false })
.then(() => {
    console.log('데이터 베이스 성공');
})
.catch((err)=>{
    console.error(err);
});


nunjucks.configure('views', {
    express: app
});
 
app.use(express.json());
app.use('/',router);

app.listen(3000,()=>{
    console.log(`start server 3000`);
})