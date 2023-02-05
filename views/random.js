import DB from "../src/db"

function random_img(){
    let num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    document.getElementById('Image').src= "data/0"+num+".png";
}
random_img()

