const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/user/:id", (req, res)=> {
    if(req.query.user) {
        res.send("hello " + req.query.user)
    } else {
        res.send("hello stranger!")
    }
    // console.log(req.params.id)
    //res.send("hello " + req.params.id)
})

app.listen(8080);


