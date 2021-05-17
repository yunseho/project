const express = require('express');
const passport = require('passport');
const bcrypt = require('bcrypt');
const { isLoggedIn, isNotLoggedIn }= require('./middlewares');
const User = require('../models/user')

const router = express.Router();

routher.post('/join',inNotLoggedIn,async (req,res,next)=>{
    const { email,nick,password }= req.body;
    try{
        const exUser = await User.findOne({ where: {email}});
    }
})