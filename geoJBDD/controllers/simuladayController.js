var mongoose = require('mongoose');
var daydata  = mongoose.model('simuladay');
var GeoJSON = require('geojson');
var gjsonTools = require('geojson-tools');
var MongoQS = require('mongo-querystring')

/* 
 * /getallPaneles
 * /getClass1 ...
*/

var swapArrayElements = function(arr, indexA, indexB) {
      var temp = arr[indexA];
      arr[indexA] = arr[indexB];
      arr[indexB] = temp;
	  return arr;
};



//GET something related to a polygon
exports.findAllPaneles = function (req, res) {
	console.log('TRIALS');	

	//con findOne le llega un item de la bdd que es una FC

	// ON HOLD:
	//  WHY IS SIMULADAY A CIRCULAR OBJECT???????????????
	//  WHY DOES A NEW COLLECTION SIMULADAYSSSS GET CREATED??
	//  AND IT IS EMPTY!!!
	//  daydata.find().toArray(function(err, dbfc_periodo)
		     //if(err) { return callback(err, null); } //res.send(500, "noooo " + err.message);
		//callback(null, users);
	//  from <div class="referencia"> https://stackoverflow.com/questions/40396308/why-dose-the-mongodb-returns-circular-object-even-though-the-inserted-object-is</div>
	 daydata.findOne(function(err, dbfc_periodo) {
		     if(err) return res.send(500, "noooo " + err.message);
	
//	var fcperiodo = toGeoJson_FEATURECOLLECTION(dbfc_periodo);
//	var mypolygon = fcperiodo.features[0].geometry;

//	Paneles.find({}).where('geometry').within(mypolygon).exec(function (error, paneles) { if(error) console.log("Error: " + error); 
		console.log(dbfc_periodo); 

//		 res.status(200).jsonp(dbfc_periodo);
	});

//	 });
 };



findAlldaydata  = function(req, res) {
    // dbfc_periodo es el result de la query findOne
	daydata.findOne(function(err, dbfc_periodo) {
    if(err) return res.send(500, "noooo " + err.message);

console.log('GET /maplayers')

var obj = JSON.stringify(dbfc_periodo);
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


///FUNCTIONS
//
var toGeoJson_featurePolygon = function (db_ResultSet) {
	
	var anObject = JSON.stringify(db_ResultSet);
	var jsonObject = JSON.parse(anObject);
	var prePolygon = jsonObject.features[0].geometry;
	var properties = jsonObject.features[0].properties;
	var coorArray = prePolygon.coordinates;
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
	var geoJson_featurePolygon = GeoJSON.parse(alldata, {GeoJSON: 'geo'});

	return geoJson_featurePolygon;

}
