var GeoJSON = require('mongoose-geojson-schema');
var mongoose = require('mongoose');
 
var schema = new mongoose.Schema({
  feature: mongoose.Schema.Types.Feature,
});
 
var db = mongoose.createConnection('localhost', 'geojpaneles');
var model = db.model('GeoJSON', schema);
 
var test = new GeoJSON({
    feature: {
        type: "Feature",
		geometry: {
    		"type": "Point",
    		"coordinates": [,]
 	 	},
        properties: [
            [
				id: "",
				CP: "",
				capacidad: ""
            ]
    }
});
 
