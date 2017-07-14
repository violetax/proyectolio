var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/geojpanelesDB";
	var mongojs = require('mongojs');
	var db = mongojs('geojpanelesDB', []);

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	    db.createCollection("geojpaneles", function(err, res) {
			    if (err) throw err;
				    console.log("geojpaneles table created!");
					    db.close();
						  });
});
