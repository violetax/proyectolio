var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var geoJSONSchema = new Schema({
  geometry: {
    type: {type: String},
    coordinates: []
  }
}, {
  collection: "geojpaneles"
});
 
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
 
module.exports = mongoose.model("geojpaneles", geoJSONSchema);
