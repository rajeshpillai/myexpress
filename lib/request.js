var qs = require("qs");
var url = require("url");

function request(req) {
    req.params = qs.parse(url.parse(req.url).query);
}

module.exports = request;