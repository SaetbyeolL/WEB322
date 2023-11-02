const readFile = require("./readFile");
//readMyFile-> this function return promise
readFile.readMyFile("./data/albums.json").then(function(data){
    console.log(data)
}).catch(function(err) {
    console.log("ERROR: " + err)
}) 