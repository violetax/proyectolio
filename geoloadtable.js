var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/geojpanelesDB";
	var mongojs = require('mongojs');
	var db = mongojs('geojpanelesDB', []);


MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	    var myobj = 
[
	{properties:
		{ id:	"1", CP:	"", capacidad:	"" },
	geometry:
		{
			coordinates: 
				{ longitud:	-2.7301025390625004, latitud:	43.30425689192164 }
		}
	},
	{properties:
		{ id:	"2", CP:	"", capacidad:	"" },
	geometry:
		{
			coordinates: 
				{ longitud:	-2.6477050781250004, latitud:	43.39213817046079 }
		}
	},
	{properties:
		{ id:	"3", CP:	"", capacidad:	"" },
	geometry:
		{
			coordinates: 
				{ longitud:	-1.9747924804687502, latitud:	43.260268541404855 }
		}
	},
	{properties:
		{ id:	"4", CP:	"", capacidad:	"" },
	geometry:
		{
			coordinates: 
				{ longitud:	-2.0764160156250004, latitud:	43.22825703776174 }
		}
	},
	{properties:
		{ id:	"5", CP:	"", capacidad:	"" },
	geometry:
		{
			coordinates: 
				{ latitud:	43.29626137570081, longitud:	-1.9857788085937502	}
		}
	}
];

		db.collection("geojpaneles").insertMany(myobj, function(err, res) {
			if (err) throw err;
			console.log("Number of records inserted: " + res.insertedCount);
			db.close();
	    });
});
