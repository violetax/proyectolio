var express = require('express');
var router = express.Router();


// Mongoose import
var mongoose = require('mongoose');
 
// Mongoose connection to MongoDB
mongoose.connect('mongodb://localhost/leaflet_map', function (error) {
    if (error) {
        console.log(error);
    }
});

var Schema = mongoose.Schema;
//define mongoose.schema THEN define mongoose.model
var JsonSchema = new Schema({
    name: String,
    type: Schema.Types.Mixed
});
 
// Mongoose Model definition
//  if you already had data in the database the first argument is a name the second is the schema and the third is the collection
var Json = mongoose.model('JString', JsonSchema, 'layercollection');


/* REQUESTS DEFS?? */

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET json data. */
router.get('/mapjson/:name', function (req, res) {
    if (req.params.name) {
        Json.findOne({ name: req.params.name },{}, function (err, docs) {
            res.json(docs);
        });
    }
});

/* GET layers json data. */
router.get('/maplayers', function (req, res) {
    Json.find({},{'name': 1}, function (err, docs) {
        res.json(docs);
	});
});

/* GET Map page. */
router.get('/map', function(req,res) {
    Json.find({},{}, function(e,docs){
        res.render('map', {
            "jmap" : docs,
            lat : 43.2630,
            lng : -2.9350
        });
    });
});





module.exports = router;
