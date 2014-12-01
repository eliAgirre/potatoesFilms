module.exports = function(app) {

// RUTAS ===============================================================

	// =====================================
	// PAGINA PRINCIPAL ====================
	// =====================================
	app.get('/', function(req, res) {

		res.render('index.ejs');

	});



	// =====================================
	// CARTELERA ===========================
	// =====================================

	app.get('/cartelera', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=25uu9nryfxqb5b65umh6mkkr';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('cartelera', {
					
					body: body
					
				})
			}
			else {

				res.render('index');

			}

		});
		
	});

	// =====================================
	// INFO DE CADA PELÍCULA ===============
	// =====================================

	app.get('/hungerGames', function(req, res) {


		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=The+Hunger+Games&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('hungerGames', {
					
					body: body
					
				})
			}
			else {

				res.render('index');

			}

		});
		
	});


	app.get('/bigHero', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Big+Hero+6&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('bigHero', {
					
					body: body
					
				})
			}
			else {

				res.render('index');

			}

		});
		
	});


}