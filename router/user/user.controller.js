
let login = (req,res)=>{
    res.render('login.html')
}
let join = (req,res) => {
    res.render('join.html');
}

module.exports = {
    login,
    join,
}