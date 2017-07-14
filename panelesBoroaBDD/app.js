var express         = require("express"),
    app             = express(),
    bodyParser      = require("body-parser"),
    methodOverride  = require("method-override"),
    mongoose        = require('mongoose');
var textBody = require("body")
var jsonBody = require("body/json")
var anyBody = require("body/any")
var sendJson = require("send-data/json")

// Connection to DB
mongoose.connect('mongodb://localhost:27017/panelesBoroa', function(err, res) {
  if(err) throw err;
  console.log('Connected to boroa Database');
});


// Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

// Import Models and controllers
var models     = require('./models/panelesModel')(app, mongoose);
var panelesCtrl = require('./controllers/panelesController');

// Example Route
var router = express.Router();
router.get('/', function(req, res) {
  res.send("Hello boot!");
});
app.use(router);

// API routes
var paneles = express.Router();

paneles.route('/paneles')
  .get(panelesCtrl.findAllPaneles)
  .post(panelesCtrl.addPaneles);

paneles.route('/paneles/:id')
  .get(panelesCtrl.findById)
  .put(panelesCtrl.updatePaneles)
  .delete(panelesCtrl.deletePaneles);


app.use('/api', paneles);

// Start server
app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});
