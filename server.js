//require express and add the app
var express  = require("express");
var app = express();

// remove the referecen of express in header
app.disable("x-power-by");

// set the static path to n-1 path
var dirname = __dirname + "/../";
console.info("dirname : ",dirname);
app.use(express.static(dirname));

// start the server
app.listen(8080);

