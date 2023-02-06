var pocketmon = [
    "img/000.png",
    "img/001.png",
    "img/002.png",
    "img/003.png",
    "img/004.png",
    "img/005.png"
]


exports.randPocketmon = function(){
    var num = Math.floor(Math.random()*6); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    return '<img src = "+pocketmon[num]+>"'
}