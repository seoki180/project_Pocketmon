const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'seoki180',
    database : 'project_pocketmon'
})

db.connect(function(err){
    if(err) throw err;
    else {console.log("db connect success")}
})

app
.use(express.static(__dirname + '/public'))
  .set('port', process.env.PORT || 3000)

app
  .engine('handlebars',handlebars.engine)
  .set('view engine', 'handlebars')

app
  .get("/",function(req,res){
    res.render('home' , {title : "Dr.Oh"})
  })

  .get('/take',function(req,res){
    var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    const dataList = []
    db.query(`select name from image_pocketmon where _id = ${num}`,function(err,row){
        for (var data of row){
            dataList.push(data.name)
        }
        dataList.push(num)
        console.log(dataList)
        res.render('take',{
          getRandomNum : dataList[1],
          pokcetmonName : dataList[0],
          title : "your Pocketmon",
          })
    })

  })


  .listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


