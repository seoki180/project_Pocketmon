
const DB = require("../lib/database")
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
        res.render('take', 
        {
            title : "your pocketmon",
            pocketmonSrc : data?.src,
            pocketmonName : data?.name
        })         
     },

     thank : async(req,res) => {
        // var test = await DB.showGuestBook()
        
        res.render("thank")
     },

     NotFound : (req,res) => {
        res.render("404")
     }
}

const process = {
    home : async(req,res) => {
        let ip = req.headers['x-forwarded-for'] || req.ip

        var userAgent = req.headers['user-agent']
        await DB.insertUserList(ip,userAgent);

        var id = RANDOM.getRandom();
        res.redirect('/page/'+id)
    },

    NotFound : (req,res) => {
        console.log(req.body)

    },

    takeHome : (req,res) => {
        res.redirect(303,'/')
    },


    thank : async (req,res) => {
        const GB = await DB.showGuestBook()
        res.json(GB)
    }
}

module.exports = {
    page,
    process
}