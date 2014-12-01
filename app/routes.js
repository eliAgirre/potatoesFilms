module.exports = function(app) {

// RUTAS ===============================================================

	// =====================================
	// PAGINA PRINCIPAL ====================
	// =====================================
	app.get('/', function(req, res) {

		res.render('index.ejs');

	});



	// =====================================
	// PELÍCULAS ===========================
	// =====================================

	app.get('/peliculas', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/box_office.json?apikey=25uu9nryfxqb5b65umh6mkkr';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('peliculas', {
					
					body: body
					
				})
			}
			else {

				res.render('index');

			}

		});
		
	});


	// =====================================
	// INFO ===========================
	// =====================================
	app.get('/toyStory', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Toy+Story+3&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('toyStory', {
					
					body: body
					
				})
			}
			else {

				res.render('index');

			}

		});
		
	});

}