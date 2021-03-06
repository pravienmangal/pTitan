var express = require('express');
var app = express();
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;

//Database connection
mongoose.connect('mongodb://billgajen:Bmangal238#@waffle.modulusmongo.net:27017/pAvup6oh');

app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(morgan('dev'));

//Database Schema / Model
var Schema = mongoose.Schema;

var campaignSchema = new Schema({
    goalAmount: String,
    campaignTitle: String
});

var Campaign = mongoose.model('Campaign', campaignSchema);

//Routes
app.get('/startCampaign', function(req, res){
        res.sendfile('./public/views/start-campaign.html');
});

app.post('/api/postCamoaign', function(req, res) {

    Campaign.create({
        goalAmount : req.body.goalAmount,
        campaignTitle: req.body.campaignTitle,
        done : false

    });
});


app.listen(port);
console.log('App listening on port' + port);

