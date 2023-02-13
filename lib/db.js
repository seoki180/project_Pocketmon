const mysql = require('mysql');

const database = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : 'seoki180',
    database : 'project_pocketmon'
})

database.connect(function(err){
    if(err) throw err;
    else {console.log("db connect success")}
})

module.exports = {
    getName : function(){
        var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
        var sql = `select * from image_pocketmon where _id = ${num}`; 
        return new Promise(function(resolve ,reject){
            database.query(sql,function(err,result){
                if(err) reject(err)
                else{ 
                    resolve(result[0])
                }
            })
        })
    },
    
    insertGuestBook : function(content){
        var sql = `insert into guest_book(contents,date) VALUES('${content}',NOW())`
        database.query(sql,function(err,result){
            if(err) throw err
            else console.log("success")
        })

    }
}