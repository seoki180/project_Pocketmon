const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const body_parser = require('body-parser')
const DB = require('./lib/db')

app
  .use(body_parser.urlencoded({ extended: true }))
  .use(express.static(__dirname + '/public'))
  .set('port', process.env.PORT || 8080)
  .engine('handlebars',handlebars.engine)
  .set('view engine', 'handlebars')

app.get("/",function(req,res){
    res.render('home' , {title : "Dr.Oh"})
  })

app.get('/take',async function(req,res){
  const data = await DB.getName()
  console.log(data)
  res.render('take', {
    title : "your pocketmon",
    pocketmonSrc : data.src,
    pocketmonName : data.name
  })  
})

app.post('/process/retake',function(req,res){
  res.redirect(302,'/take');
})
app.post('/process/guest_book',function(req,res){
  var content = (req.body.guest_book)
  DB.insertGuestBook(content)
  res.redirect(303,'/')
})

app.use(function(req,res){
  res.status(404).send("404 not found")
})

app.listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


