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

var readMyFile = (path) => {
    return new Promise((resolve, reject)=> {
        fs.readFile(path, "utf8", (err, data)=>{ 
            if(err) {
                console.log("there's been an error!! ERROR: "+ err );
                reject(err);
            } else {
                albums = JSON.parse(data)
                resolve(albums);
            }
        })
    })
}
readAlbums('./albums.json').then(function(){
    console.log("output resolved")
})



return new Promise((resolve, reject)=> {
    fs.readFile("./data/posts.json", "utf8", (err, data)=>{ 
        if(err) {
            reject("unable to read file");
        } else {
            console.log(data)
            posts = JSON.parse(data)
        }
    })



    app.all("/test", (req, res) => {
        res.status(200).end()
        })

        app.get("employeeNum: num", (req, res) => {
        res.json({employeeNum: req.params.num})
        })

        app.get("/employeeDocs/training", (req, res) => {
        res.download(path.join(__dirname,
        "training.pdf"))
        })


        app.get("/employees", (req, res) => {
        res.json({message: req.query.pay}))

        app.get("/employees", (req, res) => {
            res.json({message: req.query.position}))

        app.get("/employees", (req, res) => {
            res.json({message: "all employees"}))





            function Sprite(xPos, yPos){
                this.xPos = xPos;
                this.yPos = yPos;
                }
                Sprite.prototype.updatePosition = function(deltaX, deltaY,
                speed){
                this.xPos += deltaX * speed
                this.yPos += deltaY * speed
                };
                Sprite.prototype.getCoordinate = function(){
                var object = { x: this.xPos, y: this.yPos}
                return object
                };


        

            class Student  {

                credit;
                updateCredits(creditWeight, numberOfCourses)
                getGraduationStatus()

            }


            updateCredits(creditWeight, numberOfCourses)
            getGraduationStatus()


        }