const router = require('express').Router()
const RANDOM = require('../lib/random')
const DB = require('../lib/db')


router.get("/",async function(req,res){
    var counter = await DB.getCounter()
    DB.upCount();
    res.render('home' , 
    {   
        title : "Dr.Oh",
        getCounter : counter 
    }) 
})

router.post('/',function(req,res){
    var id = RANDOM.getRandom();
    res.redirect('/page/'+id)
})

module.exports = router