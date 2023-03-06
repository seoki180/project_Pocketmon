const {createLogger,format,transports} = require("winston")


const formatPrintf = format.printf(({timestamp,label,level,message}) => {
    return `${timestamp} [${label}] ${level} : ${message}`
})

const printWinstonFormat = {
    file : format.combine(
        format.label({
            label : "project Pocketmon"
        }),
        format.timestamp({
            format : "YYYY.MM.DD HH:mm:dd"
        }),
        formatPrintf
    ), 
    console : format.combine(
        format.colorize(),
        format.simple()
    )
}

const apt = {
    file : new transports.File({
            filename : "access.log",
            dirname : "./log",
            level : "info",
            format : printWinstonFormat.file
        }),
    console : new transports.Console({
        level : "info",
        format : printWinstonFormat.console
    })
}


const logger =  createLogger({
    transports : [apt.file]
})

logger.stream = {
    write : (msg) => {logger.info(msg)},
}

if(process.env.NODE_ENV !== 'production'){
    logger.add(apt.console)
}

module.exports = logger