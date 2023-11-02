const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const clientSessions = require("client-sessions");

const HTTP_PORT = process.env.PORT || 8080;
// call this function after the http server starts listening for requests
function onHttpStart() {
    console.log("Express http server listening on: " + HTTP_PORT);
  }
  
// This is a helper middleware function that checks if a user is logged in
// we can use it in any route that we want to protect against unauthenticated access.
// A more advanced version of this would include checks for authorization as well after
// checking if the user is authenticated
function ensureLogin(req, res, next) {
    if (!req.session.user) {
      res.redirect("/login");
    } else {
      next();
    }
  }

// Register handlerbars as the rendering engine for views
app.engine(".hbs", exphbs.engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");

// Setup the static folder that static resources can load from
// like images, css files, etc.
app.use(express.static("static"));


// Parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }));

// Setup client-sessions
app.use(clientSessions({
    cookieName: "session", // this is the object name that will be added to 'req'
    secret: "week10example_web322", // this should be a long un-guessable string.
    duration: 2 * 60 * 1000, // duration of the session in milliseconds (2 minutes)
    activeDuration: 1000 * 60 // the session will be extended by this many ms each request (1 minute)
  }));


// A simple user object, hardcoded for this example
const database = {
    username: "sampleuser",
    password: "samplepassword",
    email: "sampleuser@example.com"
  };
  
app.get("/", (req, res)=>{
    res.redirect("/login");
})

app.get("/login", (req, res)=>{
    res.render("login", {
        layout: false
    })
})

app.post("/login", (req, res)=> {
    const username = req.body.username
    const password = req.body.password

    if(username === ""|| password ===""){
        return res.render("login", {layout: false, errorMsg: "Missing credentials"});
    } 
    if(username === database.username && password === database.password){
        req.session.user = {
            username: database.username,
            email: database.email
        }
        res.redirect("/dashboard")
    } else{
        res.render("login", {layout: false, errorMsg: "Invalid username or password"})
    }
})

// An authenticated route that requires the user to be logged in.
// Notice the middleware 'ensureLogin' that comes before the function
// that renders the dashboard page
app.get("/dashboard", ensureLogin, (req, res) => {
    res.render("dashboard", {user: req.session.user, layout: false});
  });

app.get("/settings", ensureLogin, (req, res)=>{
    res.send("hello")
})


app.get("/logout", (req, res)=>{
    req.session.reset()
    res.redirect("/login");
})

app.listen(HTTP_PORT, onHttpStart);






//////////////
app.use(clientSessions({
    cookieName: "session",
    secret: "week10example_web322",
    duration: 2*60*1000,
    activeDuration: 1000 * 60
}))


app.get("/dashboard", ensureLogin, (req, res)=>{
    res.render("dashboard", {user: req.session.user, layout: false})
})


function ensureLogin(req, res, next){
    if(!req.session.user){
        res.redirect("/login");
    }else{
        next();
    }
}
























