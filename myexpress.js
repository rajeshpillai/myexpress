var http = require("http");

function myExpress() {
    var server = http.createServer(function (req, res) {
        var message = "Hello Server..";
        res.setHeader("Content-Type", "text/plain");
        res.setHeader("Content-Length", message.length);
        res.writeHead(200);
        res.end(message);
    });

    var listen = function (port) {
        server.listen(port, function () {
            console.log(`Server running on port ${port}..`);
        })
    }

    return {
        listen: listen
    }
}

module.exports = myExpress;