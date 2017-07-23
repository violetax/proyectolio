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
var simuladay	=	require('./models/simuladay')(app, mongoose);
var models		=	require('./models/panelesModel')(app, mongoose);
var areamodel	=	require('./models/areas')(app, mongoose);
var parquemodel	=	require('./models/parques')(app, mongoose);

var simuladayCtrl		=	require('./controllers/simuladayController.js');
var panelesCtrl			=	require('./controllers/panelesController');
var areasCtrl			=	require('./controllers/areasController');

// FEATURE PANELES routes
var featurepaneles = express.Router();

featurepaneles.route('/getallPanelesOnePeriod')
  .get(simuladayCtrl.findAllPaneles)

/*
featurepaneles.route('/getClass1')
	.get(simuladayCtrl.findPanelesClass1)
featurepaneles.route('/getClass2')
	.get(simuladayCtrl.findPanelesClass2)
featurepaneles.route('/getClass3')
	.get(simuladayCtrl.findPanelesClass3)
featurepaneles.route('/getClass4')
	.get(simuladayCtrl.findPanelesClass4)
featurepaneles.route('/getClass5')
	.get(simuladayCtrl.findPanelesClass5)
featurepaneles.route('/getClass6')
	.get(simuladayCtrl.findPanelesClass6)
*/


// PANELES routes
var paneles = express.Router();

paneles.route('/paneles')
  .get(panelesCtrl.findAllPaneles)
  .post(panelesCtrl.addPaneles);
 
paneles.route('/paneles/:id')
  .get(panelesCtrl.findById)
  .put(panelesCtrl.updatePaneles)
  .delete(panelesCtrl.deletePaneles);

// AREAS routes 
var arearouter = express.Router();

arearouter.route('/maplayers')
	.get(areasCtrl.findAllAreas);
arearouter.route('/parques')
	.get(areasCtrl.findAllParques);

arearouter.route('/query')
	.get(areasCtrl.findAllPanelsWithin);

/////////////////////////////////////////////////

app.use(featurepaneles);
app.use('/api', featurepaneles);

app.use(arearouter);
app.use('/api', arearouter);

app.use(paneles);
app.use('/api', paneles);


// Start server
app.listen(3000, function() {
  console.log("Node4GeoJson server running on http://localhost:3000");
});
