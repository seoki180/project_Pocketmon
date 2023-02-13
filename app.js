const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const body_parser = require('body-parser')
const DB = require('./lib/db')
const processRouter = require('./router/process')
const pageRouter = require('./router/page')
const app = express();


app
  .use(body_parser.urlencoded({ extended: true }))
  .use(body_parser.json())
  .use(express.static(__dirname + '/public'))
  
app
  .set('port', process.env.PORT || 8080)
  .set('view engine', 'handlebars')
  
app.engine('handlebars',handlebars.engine)
  
app.get("/",async function(req,res){
  var counter = await DB.getCounter()
  DB.upCount();
  res.render('home' , 
    { title : "Dr.Oh",
      getCounter : counter })
})

app.use('/page',pageRouter)
app.use('/process',processRouter)

app.use(function(req,res){
  res.status(404).render('404')
})

app.listen(app.get('port'), function(){
  console.log(`open server at ` + app.get('port'))
  })


