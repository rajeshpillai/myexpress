var http = require("http");
var url = require("url");
var routes = require("./routes");
var response = require("./response");
var request = require("./request");

function myExpress() {
    var server = http.createServer(function (req, res) {
        request(req);
        response(res);
        var match = routes.match(req);
        if (match) {
            req.params = match.params;
            match.handler(req,res);
        } else {
            res.writeHead(200);
            res.end("Route not found...");
        }
    });

    var listen = function (port) {
        server.listen(port, function () {
            console.log(`Server running on port ${port}..`);
        })
    }

    return {
        listen: listen,
        get: routes.get
    }
}

module.exports = myExpress;