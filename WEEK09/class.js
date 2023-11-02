var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const env=require('dotenv');
const { application } = require('express');
env.config()

var userSchema = new Schema({
    "username":{
        type: String,
        unique: true
    },
    "password": String,
    "email": String,
    "loginHistory": [{
        "dateTime": Date,
        "userAgent": String
    }]
})

let User

module.exports.initialize= function(){
    return new Promise(function(resolve, reject){
        let db = mongoose.createConnection(process.env.~~~내몽고디비계정);
        db.on('error', (err)=>{
            reject(error);
        });
        db.once('open', ()=>{
            User=db.model("users", userSchema)
        })    

    })
}


soundService.initialize()
.then(userService.initialize)
.then(()=>{
    application.listen(HTTP_PORT, onHttpStart)
})


































