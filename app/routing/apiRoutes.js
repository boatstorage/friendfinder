// load data 
var path = require("path");

var friendData = require("../data/friends");

// routing 

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
		res.json(friendData);
	});

	app.post("/api/friends", function(req, res) {
		var userInput = req.body;

		var responses = userInput.scores;

		var matchName;
		var matchUrl; 
		var totalDifference = 100;

		for (var i = 0; i < friendData.length; i++){

			var diff = 0;
			for (var j = 0; j < responses.length; j++) {
				diff += Math.abs(friendData[i].scores[j] - responses[j])
			}

			if (diff < totalDifference) {

				totalDifference = diff;
				matchName = friendData[i].name;
				matchUrl = friendData.photo;
			}
		}

		friendData.push(userInput);

		res.json({matchName: matchName, matchUrl: matchUrl});

	})
}