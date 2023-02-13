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

module.exports = router;