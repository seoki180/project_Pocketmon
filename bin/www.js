const app = require("../app")
const logger = require("../config/logger")

app.set('PORT', process.env.PORT || 8080)
app.listen(app.get('PORT'), '0.0.0.0',function(){
    logger.info(`open server at ` + app.get('PORT'))
})

