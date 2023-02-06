const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const randPocket = require("./lib/random")


app.engine('handlebars',handlebars.engine)
app.set('view engine', 'handlebars')
app.set('port', process.env.PORT || 4000)
app.use(express.static(__dirname + '/public'));




// app.get("/",function(req,res) {res.sendFile(__dirname + "/public/views/index.html")})
// app.get("/take",function(req,res) {res.sendFile(__dirname + "/public/views/window.html")})
// app.get("/guest_book",function(req,res){
//   console.log(req.query)
//   res.send("hello")
// })

app.get("/",function(req,res){
  res.render('home')
})
app.get('/take',function(req,res){
  res.render('take',{randPocket : randPocket.randPocketmon()})
})


app.listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
})


