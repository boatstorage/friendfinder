
// dependencies 
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// express config 
var app = express();

var PORT = 3000;
app.use(express.static('public'));
;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// router 
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listener 
app.listen(PORT, function(){
	console.log("App listening on PORT: " + PORT);
});