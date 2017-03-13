// set variables for environment
var express = require('express');
var  exphbs  = require('express3-handlebars');

var app = express();
var path = require('path');

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) {
    res.render('home',{message:'helloworld'});
});

// Set server port
app.listen(4000);
console.log('server is running');
