exports = module.exports = function(app, mongoose) {

var geojpaneles = require('mongoose-geojson-schema')
//https://searchcode.com/codesearch/raw/6134527/  VER OPCION...

/*OPTION MONGOOSE-GEOJSON 

var geoJSONSchema = new mongoose.Schema({
	 feature: mongoose.Schema.Types.Feature
  
});
*/
	//, { collection: "geojpaneles"});


/*OPTION BRUTA
 https://stackoverflow.com/questions/28749471/mongoose-schema-for-geojson-coordinates
*/

var geoJSONSchema = new mongoose.Schema({
	properties: 
	{
		id:       	{ type: String, required: false, default:"" },
    	CP: 		{ type: String, required: false, default:"" },
   	 	capacidad:	{ type: String, required: false, default:"" }
 	}
	,
  	geometry: 
	{   
		type:			{ type: String, required: false, default: "Point" },
		coordinates:	{ type: [Number], default: [0,0], index: '2dsphere'}
  	}
}, {collection: "geojpaneles"});


mongoose.model('geojpaneles', geoJSONSchema);
 
};
