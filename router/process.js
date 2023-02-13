const router = require("express").Router()
const DB = require("../lib/db")

router.post('/retake',async function(req,res){
    var post = req.body;
    console.log(post)
    res.redirect(303,'/');
  })
  
router.post('/guest_book',function(req,res){
    var content = (req.body.guest_book)
    DB.insertGuestBook(content)
    res.redirect(303,'/')
  })
  
module.exports = router;