exports = module.exports = function(app, mongoose) {

var mongoose = require('mongoose');
var featurePaneles =  require('mongoose-geojson-schema')

// Mongoose Schema definition
//var featureSchema = new mongoose.Schema ({ name: String, type: mongoose.Schema.Types.Mixed });

var featureSchema = new mongoose.Schema ({
	type:				{type: String, required: true, default: "Feature"},
	properties:
		{
			panelId: 	{ 
				compania:	{type: String, required: true},
				id:			{type: String, required: true}
			},
			periodo:	{ type: Number, required: true},
			inclinacion:{ type: Number, required: true},
			orientacion:{ type: Number, required: true},
			energiaMed:	{ type: Number, required: true},
			insolacMed:	{ type: Number, required: true},
			tmpAireMed:	{ type: Number, required: true},
			velVtoMed:	{ type: Number, required: true},
			humedadMed:	{ type: Number, required: true},

		},
		geometry:
		{
			coordinates: { type: [Number], default: [0,0], index: '2dsphere'}
		}
}, {collection: "featurePaneles"});

mongoose.model('featurePaneles', featureSchema);
 
};
