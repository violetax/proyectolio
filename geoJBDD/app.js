var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');

//var qs = require('querystring');

// Connection to DB
mongoose.connect('mongodb://localhost:27017/geojpanelesDB', function(err, res) {
  if(err) throw err;
  console.log('Connected to geoj Database');
});

// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/panelesModel')(app, mongoose);
var areamodel =  require('./models/areas')(app, mongoose);
var panelesCtrl = require('./controllers/panelesController');
var areasCtrl = require('./controllers/areasController');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello boot!");
});

// API routes
var paneles = express.Router();

paneles.route('/paneles')
  .get(panelesCtrl.findAllPaneles)
  .post(panelesCtrl.addPaneles);
 
paneles.route('/paneles/:id')
  .get(panelesCtrl.findById)
  .put(panelesCtrl.updatePaneles)
  .delete(panelesCtrl.deletePaneles);

/////////////////////////////////////////////////
////GET - Return all
/*
exports.findAllPaneles = function(req, res) {
    Paneles.find(function(err, paneles) {
    if(err) return res.send(500, "noooo " + err.message);
    console.log('GET /paneles')
    console.log(paneles);
        res.status(200).jsonp(paneles);
    });
};
// routes/index.js
/* GET layers json data. */
var arearouter = express.Router();

arearouter.route('/maplayers')
	.get(areasCtrl.findAllAreas);

arearouter.route('/query')
	.get(areasCtrl.findAllPanelsWithin);

/////////////////////////////////////////////////

app.use(arearouter);
app.use('/api', arearouter);

app.use(router);
app.use('/api', paneles);

// Start server
app.listen(3000, function() {
  console.log("Node4GeoJson server running on http://localhost:3000");
});
