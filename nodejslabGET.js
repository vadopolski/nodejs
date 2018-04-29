/**
 * Created by Home on 26.04.2018.
 */

var express = require('express');
var appGET = express();

appGET.use(express.static('public'));
appGET.get('/index.htm', function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.sendFile( __dirname + "/" + "index.htm" );
});

appGET.get('/process_get', function (req, res) {
    var header = "<form action=\"http://localhost:8081/\process_post/\" method=\"post\">";
    var inputFirstName = "</legend>First name:<br>" +
        "<input type=\"text\" name=\"firstname\" value=\"Mickey\">";
    var inputLastName = "<br><br></legend>Last name:<br>" +
        "<input type=\"text\" name=\"lastname\" value=\"Mouse\">";
    var footer = "<br><br><input type=\"submit\" value=\"Submit\">" +
        "</form>";
    var html = header + inputFirstName + inputLastName + footer;
    res.write(html);
    res.end();
});

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

appGET.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});


var serverGET = appGET.listen(8081);
