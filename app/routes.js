module.exports = function(app) {

// RUTAS ===============================================================

	// =====================================
	// PAGINA PRINCIPAL ====================
	// =====================================
	app.get('/', function(req, res) {

		res.redirect('/cartelera');

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

				res.redirect('/cartelera');

			}

		});
		
	});

	// =====================================
	// EN CINES ============================
	// =====================================

	app.get('/cines', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/in_theaters.json?apikey=25uu9nryfxqb5b65umh6mkkr';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('cines', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});

	// =====================================
	// ESTRENOS ============================
	// =====================================

	app.get('/estrenos', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/opening.json?apikey=25uu9nryfxqb5b65umh6mkkr';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('estrenos', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});

	// =====================================
	// PRÓXIMAMENTE ========================
	// =====================================

	app.get('/proximamente', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/lists/movies/upcoming.json?apikey=25uu9nryfxqb5b65umh6mkkr';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('proximamente', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});



	// =====================================
	// INFO DE CADA PELÍCULA ===============
	// =====================================

	// Cartelera
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

				res.redirect('/cartelera');

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

				res.redirect('/cartelera');

			}

		});
		
	});



	// En cines
	app.get('/madagascar', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Penguins+Of+Madagascar&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('madagascar', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});

	app.get('/interstellar', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Interstellar&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('interstellar', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});




	// Estrenos
	app.get('/pyramid', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=The+Pyramid&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('pyramid', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});

	app.get('/wild', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Wild&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('wild', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});



	// Próximamente
	app.get('/exodus', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Exodus:+Gods+and+Kings&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('exodus', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});


	app.get('/inherentVice', function(req, res) {

		var url='http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=25uu9nryfxqb5b65umh6mkkr&q=Inherent+Vice&page_limit=1';

		var request = require('request');

		request({url:url, json:"true"}, function (error, response, body, id) {

			if (!error && response.statusCode == 200) {

				console.log(body);

				res.render('inherentVice', {
					
					body: body
					
				})
			}
			else {

				res.redirect('/cartelera');

			}

		});
		
	});

}