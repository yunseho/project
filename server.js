const express = require('express');
const app = express();
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');
const mysql = require('mysql');

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'html');

nunjucks.configure('views', {
    express: app
});



app.get('/',(req,res)=>{
    res.send('hell')
})

app.listen(3000,()=>{
    console.log(`start server 3000`);
})