const ctrl = require("./index.ctrl")
const router = require('express').Router()

// 메인 페이지 라우터
router.get("/",ctrl.page.home)
router.post('/',ctrl.process.home)

module.exports = router 