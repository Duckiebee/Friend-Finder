
var path = require('path');

module.exports = function(app) {
	 console.log('___ENTER htmlRoutes.js___');

	
	app.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname, '/../public/survey.html'));
	});


	app.use('/home', function(req, res) {
		res.sendFile(path.join(__dirname, + '/../public/home.html'));
	});


}