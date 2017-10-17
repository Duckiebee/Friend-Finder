
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');


var app = express();
var PORT = process.env.PORT || 3000;

// allow access to CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// Add middleware for parsing incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

// Add the application routes
require(path.join(__dirname, './app/routing/apiRoutes.js'))(app);
require(path.join(__dirname, './app/routing/htmlRoutes.js'))(app);

// Start listening on PORT
app.listen(PORT, function() {
  console.log('Friend Finder app is listening on PORT: ' + PORT);
});