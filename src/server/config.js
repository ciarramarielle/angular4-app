const path = require("path")
const rootPath = path.normalize(__dirname +"/../../")
const dotenv = require("dotenv").config()

// This is also where I should configure the MongoDB (if I get one... :))
module.exports = {
    development: {
        rootPath: rootPath,
        port: process.env.PORT || 3000,
        host: process.env.HOST || 'localhost',
        riot_api_key: process.env.RIOT_API_KEY
    }
    ,
    production: {
        rootPath: rootPath,
        port: process.env.PORT || 80,
        host: process.env.HOST || 'https://champselect.herokuapp.com/',
        riot_api_key: process.env.RIOT_API_KEY
    }
}
