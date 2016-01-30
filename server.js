var http = require("http");
var port = 8080;
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

http.createServer(function(req, res) {
    res.setHeader("Content-Type", "application/json");
    var dateStr = decodeURI(req.url.substr(1));
    if (parseInt(dateStr).toString().length === dateStr.length) {
        dateStr = parseInt(dateStr);
    }
    var date = new Date(dateStr);
    var dateJson = {};
    if (date.getDate() === "NaN") {
        dateJson.unix = null;
        dateJson.natural = null;
    } else {
        dateJson.unix = date.getTime();
        dateJson.natural = months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear();
    }
    res.end(JSON.stringify(dateJson));
    }).listen(port);