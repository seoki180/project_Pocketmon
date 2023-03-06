const ctrl = require('./index.ctrl')
const router = require("express").Router()

router.get('/take', ctrl.process.takeHome)
router.get("/thank",ctrl.process.thank)
router.post('/guest_book',(req,res) => {
        // console.log(req.body)
        const content = (req.body.guest_contents)
        DB.insertGuestBook(content)
})

module.exports = router;