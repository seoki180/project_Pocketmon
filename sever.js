const express = require("express");
const app = express();
const host = 3000;


app.use(express.static("views"));

app.get("/",function(req,res) {res.sendFile(__dirname + '/index.html')})
app.get("/receive",function(req,res) {res.sendFile(__dirname + "/views/window.html")})
app.listen(host,function(){
    console.log(`
    ===============
      server open
    ===============
                `)
});