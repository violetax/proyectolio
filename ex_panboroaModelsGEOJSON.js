exports = module.exports = function(app, mongoose) {

  var panelesSchema = new mongoose.Schema({
    id:     { type: Number, min: 1 },
    latitud:      { type: Number},
    longitud:      { type: Number},
    CP:  { type: String },
    capacidad:  { type: String }
  },{ collection: 'paneles'});

  mongoose.model('paneles', panelesSchema);


var geoJSONSchema = new mongoose.Schema({
  geometry: {
    type: {type: String},
    coordinates: []
  }
}, {
  collection: "geojpaneles"});

 mongoose.model('geojpaneles', geoJSONSchema);
 
// Search for document intersecting lat/lng and return ONE.
// options.lat
// options.lng
geoJSONSchema.statics.findByLatLng = function (options, callback) {
  var lat = options.lat;
  var lng = options.lng;
 
  var query = {
    "geometry": {
      "$geoIntersects": {
        "$geometry": {
          type: "Point",
          coordinates: [options.lng, options.lat]
        }
      }
    }
  };
 
  this.findOne(query, callback);
};

};
//module.exports = mongoose.model("geojpaneles", geoJSONSchema);
