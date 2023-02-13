const router = require("express").Router()
const DB = require("../lib/db")

router.post('/retake', function(req,res){
    res.redirect('/');
})
  
router.post('/guest_book',function(req,res){
    var content = (req.body.guest_book)
    DB.insertGuestBook(content)
    res.redirect(303,'/')
  })
  
module.exports = router;