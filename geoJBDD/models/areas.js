exports = module.exports = function(app, mongoose) {

var mongoose = require('mongoose');
var layercollection =  require('mongoose-geojson-schema')

// Mongoose Schema definition
//var areaSchema = new mongoose.Schema ({ name: String, type: mongoose.Schema.Types.Mixed });

var areaSchema = new mongoose.Schema ({
	features:
	{
		properties:
		{
			style: { type: String, required: false},
			name:  { type: String, required: false}
		},
		geometry:
		{
			coordinates: { type: [Number], default: [0,0], index: '2dsphere'}
		}
	}
}, {collection: "layercollection"});

mongoose.model('layercollection', areaSchema);
 
};
