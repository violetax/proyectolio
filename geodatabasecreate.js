var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/geojpaneles";
	var mongojs = require('mongojs');
	var db = mongojs('geojpaneles', []);

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	    console.log("geojpaneles atabase created!");
		  db.close();
});
