/**
 * Created by Home on 10.04.2018.
 */

var http = require('http');
var url = require('url');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var header = "<form action=\"http://localhost:8080/\">";
    var inputFirstName = "</legend>First name:<br>" +
        "<input type=\"text\" name=\"firstname\" value=\"Mickey\">";
    var inputLastName = "<br><br></legend>Last name:<br>" +
        "<input type=\"text\" name=\"lastname\" value=\"Mouse\">";
    var footer = "<br><br><input type=\"submit\" value=\"Submit\">" +
        "</form>";
    var wrongMessage = "<span style=\"color: red\"> Wrong </span><br>";

    var html = header + inputFirstName + inputLastName + footer;

    if(q.firstname == "test"){
        var q = url.parse(req.url, true).query;
        res.write('Hello ' + q.firstname + ' ' + q.lastname + '!!!!!');
    } else {

        var html = header + inputFirstName + wrongMessage + inputLastName + footer;

        res.write(html);
    }

    res.end();
}).listen(8080);
