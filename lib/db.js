const mysql = require('mysql');

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'seoki180',
    database : 'project_pocketmon'
})

db.connect(function(err){
    if(err) throw err;
    else {console.log("db connect success")}
})

function showdb(){
    db.query(`select * from image_pocketmon`, function(err,row){
        if(err) throw err;
        else console.log(row);
        
        return row
    });
}

module.exports = showdb()