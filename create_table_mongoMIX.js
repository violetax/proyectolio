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


 // SUPER ERR: ESTO ME INTENTA CREAR LA TBL 2 VECES!!! EN EL LADO +, AUNQUE DEVUELVE ERROR_MSG, FUNCIONA

MongoClient.connect(url, function(err, db) {
	  if (err) throw err;
	    var myobj = 
[
	{id:"1",latitud:43.30425689192164,longitud:-2.7301025390625004,CP:"",capacidad:""},
	{id:"2",latitud:43.39213817046079,longitud:-2.6477050781250004,CP:"",capacidad:""},
	{id:"3",latitud:43.260268541404855,longitud:-1.9747924804687502,CP:"",capacidad:""},
	{id:"4",latitud:43.22825703776174,longitud:-2.0764160156250004,CP:"",capacidad:""},
	{id:"5",latitud:43.29626137570081,longitud:-1.9857788085937502,CP:"",capacidad:""}
];

		db.collection("geojpaneles").insertMany(myobj, function(err, res) {
			if (err) throw err;
			console.log("Number of records inserted: " + res.insertedCount);
			db.close();
	    });
});
