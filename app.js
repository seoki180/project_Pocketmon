const express = require("express");
const handlebars = require("express-handlebars").create({defaultLayout : 'main'})
const dotenv = require("dotenv")
const body_parser = require('body-parser')
const homeRouter = require('./router/home')
const apiRouter = require('./router/api')
const pageRouter = require('./router/page')
const logger = require("./config/logger")
const morgan = require("morgan")
const app = express();

dotenv.config()

app
  .use(body_parser.urlencoded({ extended: true }))
  .use(body_parser.json())
  .use(express.static(__dirname + '/public'))
  .use(morgan("tiny", {stream : logger.stream}))
app
  .set('view engine', 'handlebars')
  
app.engine('handlebars',handlebars.engine)

// router
app
  .use('/',homeRouter)
  .use('/page',pageRouter)
  .use('/api',apiRouter)

app.use(function(req,res){
  res.status(404).redirect('/page/404')
})

module.exports = app;