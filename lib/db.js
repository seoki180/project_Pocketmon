const mysql = require('mysql2');
const dotenv = require("dotenv")
dotenv.config()

const {
    DB_HOST,
    DB_USER,
    DB_PASSWORD,
    DB_DATABASE
} = process.env

const database = mysql.createPool({
    host : DB_HOST,
    user : DB_USER,
    password : DB_PASSWORD,
    database : DB_DATABASE,

})


module.exports = {
    getName : (num) => {
        let query = `select * from image where _id = ${num}`;
        return new Promise(function(resolve ,reject){
            database.query(query,function(err,result){
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

    insertGuestBook : (content) => {
        let query = `insert into guestBook(content,date) VALUES('${content}',NOW())`;
        database.query(query,function(err,result){
            if(err) throw err
            else console.log("success")
        })
    },

    showGuestBook :() =>{
        let query = `select * from guestBook order by id desc limit 5`;
        return new Promise(function(resolve,reject){
            database.query(query,function(err,result){
                if(err) throw err
                resolve(result)
            })
        })
    },

    getUserList : () => {
        let query = `select max(id) as max_id from userLists`;
        return new Promise(function(resolve,reject){
            database.query(query,function(err,result){
                if(err) throw err
                else resolve(result[0].max_id)
            })
        })
    },

    insertUserList : (ip,userAgent) => {
        let query = `insert into userLists (ip, userAgent, date) Value('${ip}','${userAgent}',now())`;
        database.query(query,function(err,result){
            if(err) throw err
        })
    }
}