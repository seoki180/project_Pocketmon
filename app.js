const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const app = express();
const body_parser = require('body-parser')
const DB = require('./lib/db')
const processRouter = require('./router/process')

app
  // .use(require('morgan')('dev'))
  .use(body_parser.urlencoded({ extended: true }))
  .use(express.static(__dirname + '/public'))
  
app
  .set('port', process.env.PORT || 8080)
  .set('view engine', 'handlebars')
  
app.engine('handlebars',handlebars.engine)
  
app.get("/",function(req,res){
  res.render('home' , {title : "Dr.Oh"})
})

app.get('/take',async function(req,res){
  var data = await DB.getName()
  var name = data.name;
  var src = data.src;
  res.render('take', {
      title : "your pocketmon",
      pocketmonSrc : src,
      pocketmonName : name
    }) 
})

app.use('/process',processRouter)

app.use(function(req,res){
  res.status(404).render('404')
})


app.listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


