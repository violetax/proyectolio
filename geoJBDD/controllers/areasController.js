var mongoose = require('mongoose');
var Areas  = mongoose.model('layercollection');
var Paneles = mongoose.model('geojpaneles');
var GeoJSON = require('geojson');
var gjsonTools = require('geojson-tools');
var MongoQS = require('mongo-querystring')

var convertToGeoJson = function (db_ResultSet) {
	
	var anObject = JSON.stringify(db_ResultSet);
	var jsonObject = JSON.parse(anObject);
	var prePolygon = jsonObject.features[0].geometry;
	var properties = jsonObject.features[0].properties;
	
	var coorArray = prePolygon.coordinates;
	
	var swapArrayElements = function(arr, indexA, indexB) {
		      var temp = arr[indexA];
			          arr[indexA] = arr[indexB];
					            arr[indexB] = temp;
								          return arr;
	};
	
	var newcoors = []; 
	var tempCoor;
	    for (var i =0; i < coorArray.length; i++) {
			        tempCoor = swapArrayElements(coorArray[i], 0, 1) ;
							        newcoors.push(tempCoor);
									    }
	
	var polygon = gjsonTools.toGeoJSON(newcoors, 'polygon');
	var alldataArr = [];
	var alldata = {};
	alldata = [{ name: properties.name, style: properties.style, geo: polygon }];
	
	var geoJsonObject = GeoJSON.parse(alldata, {GeoJSON: 'geo'});

	return geoJsonObject;

}

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

//my_type_coord_point
//														my_geojson_poly
//pointFields


	 });
 };

//var pointFields = { '_id': 1, 'loc': 1 };

// Areas.find({}).where('my_type_coord_point').within(my_geojson_poly).select(pointFields).lean().exec(function (error, result) { console.log("Error: " + error); console.log(result); }

//GET one polygon
exports.findAllAreas  = function(req, res) {
    // areas es el result de la query findOne
	Areas.findOne(function(err, areas) {
    if(err) return res.send(500, "noooo " + err.message);

console.log('GET /maplayers')

var obj = JSON.stringify(areas);
var jobj = JSON.parse(obj);
var nopolygon = jobj.features[0].geometry;
var properties = jobj.features[0].properties;

var coorArray = nopolygon.coordinates;

var swapArrayElements = function(arr, indexA, indexB) {
	  var temp = arr[indexA];
	    arr[indexA] = arr[indexB];
		  arr[indexB] = temp;
		  return arr;
};

var newcoors = [];
var tempCoor;
	for (var i =0; i < coorArray.length; i++) {
		tempCoor = swapArrayElements(coorArray[i], 0, 1) ;
		console.log(tempCoor);
		newcoors.push(tempCoor);
	}

var polygon = gjsonTools.toGeoJSON(newcoors, 'polygon');
var alldataArr = [];
var alldata = {};
alldata = [{ name: properties.name, style: properties.style, geo: polygon }];
console.log(alldata);

var gjojb = GeoJSON.parse(alldata, {GeoJSON: 'geo'});

//	res.send(feature);
    res.status(200).jsonp(gjojb);
    });
};





/*
 
{ _id: 596782624e30849c56796fea,
  type: 'FeatureCollection',
  name: 'getxolayer',
  features: [ { geometry: [Object], properties: [Object], type: 'Feature' } ] }

*/


/*

arearouter.get('/maplayers', function (req, res) {
    areamodel.layercollection.find({},{'name': 1}, function (err, docs) {
		 console.log(req);
    });
});
arearouter.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        layercollection.findOne({ name: req.params.name },{}, function (err, docs) {
           console.log(req); 
        });
    }
});

//render function: 2 args:
//1º use .pug template file in the views directory
//2º a JSON object with a name of title and a value of ‘Express
arearouter.get('/map', function(req,res) {
    layercollection.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat :  43.28854,
            lng :  -2.96574
        });
    });
});

*/
