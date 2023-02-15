const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const body_parser = require('body-parser')
const indexRouter = require('./router/index')
const processRouter = require('./router/process')
const pageRouter = require('./router/page')
const app = express();


app
  .use(body_parser.urlencoded({ extended: true }))
  .use(body_parser.json())
  .use(express.static(__dirname + '/public'))
  
app
  .set('PORT', process.env.PORT || 8080)
  .set('view engine', 'handlebars')
  
app.engine('handlebars',handlebars.engine)

app
  .use('/',indexRouter)
  .use('/page',pageRouter)
  .use('/process',processRouter)

app.use(function(req,res){
  res.status(404).redirect('/page/404')
})

app.listen(app.get('PORT'), function(){
  console.log(`open server at ` + app.get('PORT'))
  })


