const router = require('express').Router()
const DB = require('../lib/db')

router.get('/take',async function(req,res){
    var data = await DB.getName()
    if(data === undefined){
        res.redirect('/')
    } 
    else{
        var name = data.name;
        var src = data.src;
    }
    
    res.render('take', {
        title : "your pocketmon",
        pocketmonSrc : src,
        pocketmonName : name
    }) 
})
router.get('/404',function(req,res){
    res.render("404")
})
router.post('/404',function(req,res){
    const s = req.body
    console.log(s)
    res.redirect('/')
})

module.exports = router;