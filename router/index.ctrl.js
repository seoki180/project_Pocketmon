const DB = require("../lib/db")
const RANDOM = require('../lib/random')


const page = {
     home : async(req,res) => {
        var counter = await DB.getUserList()
        res.render('home' , 
        {   
            title : "Dr.Oh",
            getCounter : counter 
        }) 
     },
     
     take : async(req,res) => {
        var data = await DB.getName(req.url.replace('/',''))
        if(data !== undefined){
            res.render('take', 
            {
                title : "your pocketmon",
                pocketmonSrc : data.src,
                pocketmonName : data.name
            }) 
        }
        else{
            res.redirect("/")
        }
     },

     thank : async(req,res) => {
        var test = await DB.showGuestBook()
    // console.log(JSON.stringify(test))
        res.render("thank",{
            content : test[0].contents,
            name : test[0].name,
            date : test[0].date.toLocaleString(),
            content2 : test[1].contents,
            name2 : test[1].name,
            date2 : test[1].date.toLocaleString(),
            content3 : test[2].contents,
            name3 : test[2].name,
            date3 : test[2].date.toLocaleString(),
        })
     },

     NotFound : (req,res) => {
        res.render("404")
     }
}

const process = {
    home : async(req,res) => {
        var ip = 
        req.headers['x-forwarded-for'] ||
        req.ip 
        // req.connection.remoteAddress ||
        // req.socket.remoteAddress ||
        // req.connection.socket.remoteAddress;
        var userAgent = req.headers['user-agent']
        await DB.insertUserList(ip,userAgent);

        var id = RANDOM.getRandom();
        res.redirect('/page/'+id)
    },

    NotFound : (req,res) => {
        console.log(req.body)
        res.redirect('/')
    },

    takeHome : (req,res) => {
        res.redirect(303,'/')
    },

    takeGuestBook : (req,res) => {
        console.log(req.body)
        const content = (req.body.guest_contents)
        const name = req.body.guest_name

        if(content === '')
        {
            console.log('empty content')
            res.redirect('/')
        }
        else{
            DB.insertGuestBook(content,name)
            res.redirect('/page/thank')
        }
    }
}

module.exports = {
    page,
    process
}