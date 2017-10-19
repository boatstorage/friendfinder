// dependecies 
 var path = require("path");

 // routing 

 module.exports = function(app) {

 	app.get("/survey", function(req, res){
 		res.sendFile(path.join(__dirname, "/../public/survey/index.html"));
 	});

 	app.use(function(req, res){
 		res.sendFile(path.join(__dirname, "/../public/home/index.html"));
 	});
 };