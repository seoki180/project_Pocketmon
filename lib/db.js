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

// exports.getName = function(id){
//     db.query(`select name from image_pocketmon where _id = ${id}`,function(err,row){
//         if(err) throw err;
//         else{
//             var name = 'temp';
//             for (var data of row){
//                 name = (data.name);
//             }
//             console.log(data)
//             return name
//         }
//     })
// }

// exports.randPocketmon = function(){
//     var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
//     return num
// }


module.exports = {
    getName : function(){
        var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
        const dataList = []
        db.query(`select name from image_pocketmon where _id = ${num}`,function(err,row){
            for (var data of row){
                dataList.push(data.name)
            }
            dataList.push(num)
            console.log(dataList)
            return dataList
        })
        db.connect()
    },

    // randPocketmon : function(){
    //     var num = Math.floor(Math.random()*39); //다섯개 이상의 파일을 출력하려면 5를 해당숫자로 수정.
    //     return num
    // }
}