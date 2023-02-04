const express = require("express");
const app = express();
const host = 3000 || proecess.env.PORT;



app.use(express.static("views"));

app.get("/",function(req,res) {res.sendFile(__dirname + '/index.html')})
app.get("/take",function(req,res) {res.sendFile(__dirname + "/views/window.html")})
app.get("/guest_book",function(req,res){
  console.log(req.query)
  res.send("hello")
})

app.listen(host,function(){
    console.log(`
    ===============
      server open
    ===============
                `)
});


