var myExpress = require("./lib/myexpress.js");

var app = myExpress();

app.get("/greeting", function (req, res) {
    res.send("Hello how are you?");
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