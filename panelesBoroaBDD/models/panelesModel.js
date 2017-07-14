exports = module.exports = function(app, mongoose) {

  var panelesSchema = new mongoose.Schema({
    id:     { type: Number, min: 1 },
    latitud:      { type: Number},
    longitud:      { type: Number},
    CP:  { type: String },
    capacidad:  { type: String }
  },{ collection: 'paneles'});

  mongoose.model('paneles', panelesSchema);

};
