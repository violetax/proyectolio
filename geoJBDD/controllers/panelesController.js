var mongoose = require('mongoose');  
var Paneles  = mongoose.model('geojpaneles');


//GET - Return all 
exports.findAllPaneles = function(req, res) {  
    Paneles.find(function(err, paneles) {
    if(err) return res.send(500, "noooo " + err.message);

    console.log('GET /paneles')
	console.log(paneles);
        res.status(200).jsonp(paneles);
    });
};

//GET - Return a paneles with specified ID
exports.findById = function(req, res) {  
    Paneles.findById(req.params.id, function(err, paneles) {
    if(err) return res.send(500, err.message);

    console.log('GET /paneles/' + req.params.id);
        res.status(200).jsonp(paneles);
    });
};

//POST - Insert a new kutxazain in the DB
exports.addPaneles = function(req, res) {  

    console.log('add POST');
	console.log(req.body);

var id = req.body["properties[id]"];
var cp = req.body["properties[CP]"];
var capacidad = req.body["properties[capacidad]"];
var geometry =  req.body["geometry[coordinates][]"];

		//new Paneles(
 var paneles = 
{
	properties: { id:   id, CP:  cp  , capacidad:  capacidad } 
	, geometry: { coordinates:  geometry}
};

//	    paneles.save(function(err, paneles) { if(err) return res.status(500).send( err.message); res.status(200).jsonp(paneles); });

Paneles.insertMany(paneles, function(err, res) {
            if (err) throw err;
	console.log("record TO INSERT");
	console.log(res);
            console.log("record inserted");
        });


};

//PUT - Update a register already exists
exports.updatePaneles = function(req, res) {  
    Paneles.findById(req.params.id, function(err, paneles) {
        paneles.id=     req.body.id,
        paneles.latitud=  req.body.latitud,
        paneles.longitud=   req.body.longitud,
        paneles.CP=  req.body.CP,
        paneles.capacidad=    req.body.capacidad

        paneles.save(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).jsonp(paneles);
        });
    });
};

//DELETE - Delete a paneles with specified ID
exports.deletePaneles = function(req, res) {  
    Paneles.findById(req.params.id, function(err, paneles) {
        paneles.remove(function(err) {
            if(err) return res.status(500).send(err.message);
      res.status(200).send();
        })
    });
};
//var GeoJSON = require('mongoose-geojson-schema');
//var geojpaneles  = require('mongoose-geojson-schema');
var npmGeoJSON = require('geojson');
var qs = require('querystring');
