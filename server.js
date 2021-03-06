//require express and add the app
var express  = require("express");
var serveIndex = require("serve-index");
var serverStatic = require("serve-static");


express.static.mime.define({"video/mp4":["m4s","mp4"]});
express.static.mime.define({"text/xml":["xml","mpd"]});

var app = express();
var PORT = 8081;
// remove the referecen of express in header
app.disable("x-power-by");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*'); // NOT SAFE FOR PRODUCTION
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');

    next();
};


// set the static path to n-1 path
var dirname = __dirname + "/../";

// set index to list files lique apache
var index = serveIndex(dirname, {'icons': true});
// enable statics files
var staticFiles = serverStatic(dirname);


app.use(allowCrossDomain);
app.use(staticFiles);
app.use(index);



console.info("server started on 'localhost' port ",PORT);
// start the server
app.listen(PORT);

