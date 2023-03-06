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

module.exports = database