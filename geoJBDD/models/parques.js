exports = module.exports = function(app, mongoose) {

var mongoose = require('mongoose');
var parquescollection =  require('mongoose-geojson-schema')

var parqueSchema = new mongoose.Schema ({
	features:
	{
		properties:
		{
			name:  { type: String, required: false}
		},
		geometry:
		{
			coordinates: { type: [Number], default: [0,0], index: '2dsphere'}
		}
	}
}, {collection: "parquescollection"});

mongoose.model('parquescollection', parqueSchema);
 
};
