var http = require("http");
var routes = require("./routes");

function myExpress() {
    var server = http.createServer(function (req, res) {
        var handler = routes.match(req);
        if (handler) {
            handler(req,res);
        }else {
            res.writeHead(200);
            res.end("Route not found");
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