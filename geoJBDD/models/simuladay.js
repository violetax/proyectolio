exports = module.exports = function(app, mongoose) {

var mongoose = require('mongoose');
var simuladay =  require('mongoose-geojson-schema')

var featureSchema = new mongoose.Schema ({
	"type":					{type: String, default: "FeatureCollection"},
	features:
	[{
		"type":				{type: String, default: "Feature"},
		geometry:
		{
			type:			{type: String, default: "Point"},
			coordinates:	{type: [Number], default: [0,0], index: '2dsphere'}
		},		
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
			humedadMed:	{ type: Number, required: true}

		},
	}]
});

mongoose.model('simuladay', featureSchema);

};
