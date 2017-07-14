exports = module.exports = function(app, mongoose) {


/*OPTION MONGOOSE-GEOJSON
var geoJSONSchema = new mongoose.Schema({
	 feature: mongoose.Schema.Types.Feature,
  }, { collection: "paneles"});
  */

/*OPTION BRUTA*/

var geoJSONSchema = new mongoose.Schema({
	properties: 
	{
		id:       	{ type: String, required: false, default:"100" },
    	CP: 		{ type: String, required: false },
   	 	capacidad:	{ type: String, required: false }
 	},
  	geometry: 
	{
   		coordinates: { type: [Number], index: '2dsphere'}
  	}
}, {collection: "paneles"});

mongoose.model('paneles', geoJSONSchema);
 
};
