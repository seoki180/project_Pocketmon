const router = require('express').Router()
const RANDOM = require('../lib/random')
const DB = require('../lib/db')


// 메인 페이지 라우터
router.get("/",async function(req,res){
    var counter = await DB.getUserList()
    res.render('home' , 
    {   
        title : "Dr.Oh",
        getCounter : counter 
    }) 
})

router.post('/',async function(req,res){
    var ip = 
        req.headers['x-forwarded-for'] ||
        req.ip 
        // req.connection.remoteAddress ||
        // req.socket.remoteAddress ||
        // req.connection.socket.remoteAddress;

    var userAgent = req.headers['user-agent']
    await DB.insertUserList(ip,userAgent);

    // console.log(req.headers)
    var id = RANDOM.getRandom();
    res.redirect('/page/'+id)
})

module.exports = router 