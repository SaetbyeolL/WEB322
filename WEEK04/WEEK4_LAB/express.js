// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     res.send("hello world");
// });
// app.listen(8080);

const express = require("express");
const app = express();  
const HTTP_PORT = process.env.PORT||8080;

function onHttpStart()  {
    console.log("Express http server listening on: " + HTTP_PORT);
}

app.get("/", (req, res) => {
    res.send("<h1>Welcome to my simple website</h1><p>Be sure to visit the <a href='/headers'>headers page</a> to see what headers were sent from your browser to the server!</p>");
});

app.get("/headers", (req, res)=> {
    const headers = req.headers;
    res.send(headers);
})

app.use((req, res) =>  {
    res.status(404).send("Page Not Found");
});

app.listen(HTTP_PORT, onHttpStart);