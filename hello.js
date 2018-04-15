/**
 * Created by Home on 10.04.2018.
 */

var http = require('http');
var url = require('url');
var count = 0;

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;

    res.end('Hello ' + q.firstname + ' ' + q.lastname + '!!!!!');

    console.log("Number is" + ++count);
}).listen(8080);
