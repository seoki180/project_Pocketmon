const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const getPocketmon = require("./lib/random")

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
    res.render('take',{
      getPocketmon : getPocketmon.randPocketmon(),
      title : "your Pocketmon"})
  })


  .listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


