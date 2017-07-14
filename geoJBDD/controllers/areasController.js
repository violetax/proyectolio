var mongoose = require('mongoose');
var Areas  = mongoose.model('layercollection');
var GeoJSON = require('geojson');


//GET - Return all
//Esto devuelve la coleccion al completo
/*
 GET /maplayers
{ _id: 596782624e30849c56796fea,
  type: 'FeatureCollection',
  name: 'getxolayer',
  features: [ { geometry: [Object], properties: [Object], type: 'Feature' } ] }
*/
exports.findAllAreas  = function(req, res) {
    Areas.findOne(function(err, areas) {
    if(err) return res.send(500, "noooo " + err.message);

console.log('GET /maplayers')

var obj = JSON.stringify(areas);
var jobj = JSON.parse(obj);
var polygon = jobj.features[0].geometry;
var properties = jobj.features[0].properties;
  
 console.log(polygon);
        gjojb = GeoJSON.parse(properties, 
        			{GeoJSON: polygon});
       	console.log(gjojb);


//console.log(jobj);
//console.log(areas);
//console.log(jobj.features);
//console.log(jobj.features[0]);
/**/ // console.log(jobj.features[0].geometry); /**/
		

var data = [{name: 'Location A', geo: {"type": "Polygone", "coordinates": [[125.6, 10.1], [129.6, 12.1]]}}];

var geojobj = GeoJSON.parse(data, {GeoJSON: 'geo'});
var feature = jobj.features[0];
var features = jobj.features;
//	res.send(feature);
         res.status(200).jsonp(feature);
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
