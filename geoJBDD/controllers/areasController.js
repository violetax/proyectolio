var mongoose = require('mongoose');
var Areas  = mongoose.model('layercollection');
var Parques = mongoose.model('parquescollection');
var Paneles = mongoose.model('geojpaneles');
var GeoJSON = require('geojson');
var gjsonTools = require('geojson-tools');
var MongoQS = require('mongo-querystring')

var swapArrayElements = function(arr, indexA, indexB) {
   	var temp = arr[indexA];
   	arr[indexA] = arr[indexB];
	arr[indexB] = temp;
	return arr;
};

var swapCoors = function(arr) {
	for (var i=0; i < arr.length; i++) {
	swapArrayElements(arr[i], 0, 1);
	}
};

//MANUAL EDIT ALLDATA PROPERTIES
var polygon_toGeoJsonFC = function (db_ResultSet) {
	
	var anObject = JSON.stringify(db_ResultSet);
	var jsonObject = JSON.parse(anObject);
	var prePolygon = jsonObject.features[0].geometry;
	var properties = jsonObject.features[0].properties;


	var coorArray = prePolygon.coordinates;
	swapCoors(coorArray);
	var polygon = gjsonTools.toGeoJSON(coorArray, 'polygon');
	//var alldata = [{ name: properties.name, style: properties.style, geo: polygon }];
	var alldata = [{ name: properties.name, geo: polygon }];
	
	var geoJsonObject = GeoJSON.parse(alldata, {GeoJSON: 'geo'});

	return geoJsonObject;

}

exports.findAllAreas  = function(req, res) {
    // areas es el result de la query findOne
	Areas.findOne(function(err, areas) {
    if(err) return res.send(500, "noooo " + err.message);

	console.log('GET /maplayers')
	var gjojb = polygon_toGeoJsonFC(areas);

    res.status(200).jsonp(gjojb);
    });
};


exports.findAllParques  = function(req, res) {
    // parques es el result de la query findOne
	Parques.findOne(function(err, parques) {
    if(err) return res.send(500, "noooo " + err.message);

	console.log('GET /parques')
	var parque = polygon_toGeoJsonFC(parques);

    res.status(200).jsonp(parque); //gjojb);
    });
};



//GET something related to a polygon
 exports.findAllPanelsWithin = function (req, res) {
	console.log('TRIALS');	

	 Areas.findOne(function(err, areas) {
		     if(err) return res.send(500, "noooo " + err.message);
	
	var area = convertToGeoJson(areas);
	var mypolygon = area.features[0].geometry;

	Paneles.find({}).where('geometry').within(mypolygon).exec(function (error, paneles) { 
	if(error) console.log("Error: " + error); 
console.log(paneles); 

res.status(200).jsonp(paneles);
	});

	 });
 };
