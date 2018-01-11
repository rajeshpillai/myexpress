var myExpress = require("./lib/myexpress.js");

var app = myExpress();

app.use (function (req, res, next) {
    console.log ("in middleware 1...");
    next();
});

app.use (function (req, res, next) {
    console.log ("in middleware 2...");
    next();
});

// simple logger
app.use(function(req, res, next){
    console.log('%s %s', req.method, req.url);
    next();
});

app.get("/", function (req,res) {
    res.send("Good morning");
});

app.get("/greeting/:name", function (req, res) {
    console.log(req.params["name"]);
    res.send(`Hello how are you ${req.params["name"]}?`);
});

app.get("/logoff", function (req, res) {
    res.send("Signing off. Good night:)");
});

app.get("/dashboard", function (req,res) {
    res.redirect("/greeting");
});

app.get("/users_json", function (req,res) {
    res.json({
        message: "Rajesh Pillai"
    });
})


app.listen(3000);