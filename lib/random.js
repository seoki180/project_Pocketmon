const DB = require("./db")

var pocketmon = [
  "/img/00.png",
  "/img/01.png",
  "/img/02.png",
  "/img/03.png",
  "/img/04.png",
  "/img/05.png"
]


module.exports = {
  randPocketmon : function(){
    var num = Math.floor(Math.random()*6); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    return num
  },
};
