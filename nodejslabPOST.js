/**
 * Created by Home on 26.04.2018.
 */

var express = require('express');
var appPOST = express();
var bodyParser = require('body-parser');

// Create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

appPOST.use(express.static('public'));
appPOST.get('/index.htm', function (req, res) {
    res.sendFile( __dirname + "/" + "index.htm" );
});

appPOST.post('/process_post', urlencodedParser, function (req, res) {
    // Prepare output in JSON format
    response = {
        first_name:req.body.first_name,
        last_name:req.body.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response));
});

var serverPOST = appPOST.listen(8081, function () {
    var host = serverPOST.address().address;
    var port = serverPOST.address().port;

    console.log("Example appGET listening at http://%s:%s", host, port)

});