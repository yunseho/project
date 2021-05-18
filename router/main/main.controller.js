let main = (req,res) => {
    userid = req.session.userid
    username = req.session.username
    flag = req.query.flag
    res.render('index.html',{
        userid,
        username,
        flag,
    })
}

module.exports = {
    main,
}