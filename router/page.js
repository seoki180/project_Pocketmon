const router = require('express').Router()
const { json } = require('body-parser')
const DB = require('../lib/db')

router.get("/thank",async function(req,res){
    var test = await DB.showGuestBook()
    console.log(JSON.stringify(test))
    res.render("thank",{
        content : test[0].contents,
        date : test[0].date
    })
})


// 포켓몬 사진을 띄우는 페이지
router.get('/:id',async function(req,res){
    var data = await DB.getName(req.url.replace('/',''))
    if(data !== undefined){
        res.render('take', 
        {
            title : "your pocketmon",
            pocketmonSrc : data.src,
            pocketmonName : data.name
        }) 
    }
    else{
        res.redirect("/")
    }
})



// 404 화면을 띄워주는 페이지
router.get('/404',function(req,res){
    res.render("404")
})

router.post('/404',function(req,res){
    console.log(req.body)
    res.redirect('/')
})



module.exports = router;