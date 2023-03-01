const ctrl = require('./index.ctrl')
const router = require("express").Router()

router.get('/take', ctrl.process.takeHome)
router.post('/guest_book',ctrl.process.takeGuestBook)
router.get("/thank",ctrl.process.thank)

module.exports = router;