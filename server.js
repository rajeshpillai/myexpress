var http = require("http");

var server = http.createServer(function (req, res) {
    var message = "Hello Server..";
    res.setHeader("Content-Type", "text/plain");
    res.setHeader("Content-Length", message.length);
    res.writeHead(200);
    res.end(message);
});

server.listen(8080, function () {
    console.log("Server running on port 8080..");
})