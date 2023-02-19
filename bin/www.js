const app = require("../app")

app.set('PORT', process.env.PORT || 8080)
app.listen(app.get('PORT'), '0.0.0.0',function(){
    console.log(`open server at ` + app.get('PORT'))
})

