const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const body_parser = require('body-parser')
const mysql = require('mysql');

const DB = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'seoki180',
    database : 'project_pocketmon'
})
app.use(body_parser.urlencoded({ extended: true }));

DB.connect(function(err){
    if(err) throw err;
    else {console.log("db connect success")}
})

app
  .use(express.static(__dirname + '/public'))
  .set('port', process.env.PORT || 8080)

app
  .engine('handlebars',handlebars.engine)
  .set('view engine', 'handlebars')

app.get("/",function(req,res){
    res.render('home' , {title : "Dr.Oh"})
  })

app.get('/take',function(req,res){
    var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    const dataList = []
    DB.query(`select name, src from image_pocketmon where _id = ${num}`,function(err,row){
      if(err) throw err;
      else{
          for (var data of row){
              dataList.push(data.name)
              dataList.push(data.src)
          }
          dataList.push(num)
          console.log(dataList)
          res.render('take',{
            pocketmonSrc : dataList[1],
            pokcetmonName : dataList[0],
            title : "your Pocketmon",
            })
          }
      });
  })

app.post('/process/retake',function(req,res){
  res.redirect(302,'/take');
})
app.post('/process/guest_book',function(req,res){
  var content = (req.body.guest_book)
  DB.query(`insert into guest_book(contents,date) VALUES('${content}',NOW())`)
  res.redirect(303,'/')
})

app.use(function(req,res){
  res.status(404).send("404 not found")
})

app.listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


