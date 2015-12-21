var express = require('express');
var app = express();
var mongoose = require('mongoose');
var fs = require('fs');

mongoose.connect('mongodb://billgajen:Bmangal238#@waffle.modulusmongo.net:27017/pAvup6oh');

var Schema = mongoose.Schema;

var campaignSchema = new Schema({
    goalAmount: String,
    campaignTitle: String
});

var Campaign = mongoose.model('Campaign', campaignSchema);

var port = process.env.PORT || 3000;

app.get('/', function(req, res){
        res.send('<html><head></head><body><h1>Save the rhinos</h1></body></html>');
});



app.listen(port);
console.log('App listening on port' + port);

