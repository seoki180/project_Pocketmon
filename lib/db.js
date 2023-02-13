const { get } = require('http');
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

function randomNum(lower, upper){
    let random =  Math.floor(Math.random() * (upper-lower+1)) + lower;
    return random;
}

module.exports = {
    getName : function(){
        var num = randomNum(0,38);
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

    getCounter : function(){
        var sql = `select count from counter`;
        return new Promise(function(resolve,reject){
            database.query(sql,function(err,result){
                if(err) reject(err);
                else {
                    resolve(result[0].count)}
            })
        })
    },

    upCount : function(){
        var sql = `update counter set count = count+1`
        database.query(sql,function(err,result){
            if(err) throw(err);
            else console.log("count!")
        })
    }
}