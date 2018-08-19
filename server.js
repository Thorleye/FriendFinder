var express = require("express");
var bodyparser = require("body-parser");
var path = require("path");

var app = express();

require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);
