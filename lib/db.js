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

    insertGuestBook : (content,recieved) => {
        let today = new Date().toLocaleDateString()
        let todayh = new Date().toLocaleTimeString()
        let query = `insert into guestBook(content,date,recievedPocketmon) VALUES('${content}','${today + " " + todayh}','${recieved}')`;
        database.query(query,function(err,result){
            if(err) throw err
            else {
                console.log("success")

            }
        })
    },

    showGuestBook :() =>{
        let query = `select * from guestBook order by id desc`;
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
    },

    updateReferNum : (id) => {
        let sql = `update recievedList set referNum = referNum + 1 where _id = ${id}`
        database.query(sql,(err,result) => {
            if(err) throw err
        })
    },

    getUserName : (id) => {
        let sql = `select name,referNum from recievedList where _id = ${id}`
        return new Promise((resolve,reject) => {
            database.query(sql,(err,result)=>{
                const userName = result[0].name + " 트레이너 " + result[0].referNum
                resolve(userName)
            })
        })
    },

    updateUserName : (name) => {
        let sql = `UPDATE guestBook SET name = '${name}' ORDER BY id DESC LIMIT 1;`
        database.query(sql,(err,result)=>{
            if(err) throw err
        })
    }
}