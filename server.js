//PREPARACIÓN ===============================================================

//Definición de las dependencias
var express  = require('express');
var request = require('request');
var morgan = require ('morgan');

var app      = express(); 
var port     = process.env.PORT || 3000;


//CONFIGURACIÓN ===============================================================
app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));

app.set('view engine', 'ejs');


// RUTAS ======================================================================
require('./app/routes.js')(app);


// ARRANQUE DEL SERVIDOR ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);