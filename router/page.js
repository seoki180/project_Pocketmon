const db = require("../lib/database")
const ctrl = require("./index.ctrl")
const router = require('express').Router()



router.get("/thank",ctrl.page.thank)
// 포켓몬 사진을 띄우는 페이지
router.get('/:id',ctrl.page.take)
router.post('/:id',async (req,res) => {
    const content = req.body.guest_contents;
    const recieved = req.params.id
    if(content !== ''){
        db.insertGuestBook(content,recieved)
        db.updateReferNum(recieved)
        const data = await db.getUserName(recieved)
        console.log(data)
        db.updateUserName(data)
    }
    res.status(301)

})



// 404 화면을 띄워주는 페이지
router.get('/404',ctrl.page.NotFound)
router.post('/404',ctrl.process.NotFound)



module.exports = router;    