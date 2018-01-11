var myExpress = require("./lib/myexpress.js");

var app = myExpress();

app.get("/greeting", function (req, res) {
    var message = "Good morning";
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", message.length);
    res.writeHead(200);
    res.end(message);
});

app.get("/logoff", function (req, res) {
    var message = "Signing off.  Good night.";
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", message.length);
    res.writeHead(200);
    res.end(message);
});


app.listen(3000);