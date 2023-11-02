// Node.js program to demonstrate
// the fs.readFile() method
  
// Include fs module
const { doesNotMatch } = require('assert');
const fs = require("fs");

let albums = []

module.exports.readMyFile = (path) => {//module.exports <- kind of global
    return new Promise((resolve, reject)=> {
        fs.readFile(path, "utf8", (err, data)=>{ // utf8 <-안해주면 아스키코드로 읽음
            if(err) {
                console.log("there's been an error!! ERROR: "+ err );
                //JSON.parse()
                reject(err);
            } else {
                //console.log(data);
                albums = JSON.parse(data)
                resolve(albums);
            }
        })
    })
}
//assignment에서 요구하는것 다 있음. 
//arrow function
//helloprof/soundExpress









