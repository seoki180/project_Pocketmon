const router = require("express").Router()
const DB = require("../lib/db")

router.post('/take', function(req,res){
    res.redirect(303,'/');
})

router.post('/guest_book',function(req,res){
    var content = (req.body.guest_book)

    if(content === '')
    {
        console.log('empty content')
        res.redirect('/')
    }
    else{
        DB.insertGuestBook(content)
        res.redirect('/page/thank')
    }
})


module.exports = router;