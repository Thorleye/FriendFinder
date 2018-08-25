var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

app.use(bodyParser.urlencoded({ extended:true}));
app.use(bodyParser.json());

