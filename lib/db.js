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
    getName : function(num){
        var sql = `select * from image where _id = ${num}`; 
        return new Promise(function(resolve ,reject){
            database.query(sql,function(err,result){
                if(err) {
                    console.error(err)
                    reject(err)
                }
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
    },
    showGuestBook : function(){ 
        var sql = `select * from guest_book order by _id desc limit 5`;
        return new Promise(function(resolve,reject){
            database.query(sql,function(err,result){
                if(err) throw err
                console.log(result)
                resolve(result)
            })
        })
    },

    getUserList : function(){
        var sql = `select max(id) as max_id from userList`
        return new Promise(function(resolve,reject){
            database.query(sql,function(err,result){
                if(err) throw err
                else resolve(result[0].max_id)
            })
        })
    },

    insertUserList : function(ip,userAgent){
        var sql = `insert into userList (ip, userAgent, date) Value('${ip}','${userAgent}',now())`
        database.query(sql,function(err,result){
            if(err) throw err
        })
    }
}