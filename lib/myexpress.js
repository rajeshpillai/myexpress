var http = require("http");
var url = require("url");
var routes = require("./routes");
var response = require("./response");

function myExpress() {
    var server = http.createServer(function (req, res) {
        response(res);
        var pathHandler = routes.match(req);
        if (pathHandler) {
            pathHandler(req,res);
        } else {
            res.send("Route not found...");
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