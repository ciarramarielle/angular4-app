// // npm install express --save

// // Start ExpressJS application
// var express = require("express");
// var app = express();


// // Configure ExpressJS depending on the env (NodeJS)
// var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// var config = require("./src/server/config.js")[env];
// require("./src/server/express.js")(app, config);

// // FIXME: Commented out until it works :(
// // routes
// // require('./src/server/routes/riotapi.js')(app);

// // Start NodeJS on configured port
// app.listen(config.port, '0.0.0.0'); // 0.0.0.0 to allow any IP.
// console.log("Listening on " + config.host + ":" + config.port);
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();

// API file for interacting with MongoDB
const api = require('./src/server/routes/api');

// Parsers
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

// Angular DIST output folder
app.use(express.static(path.join(__dirname, 'dist')));

// API location
app.use('/api', api);

// app.get('/api/ciarra', function(req, res) {
//     res.send({
//         'a': 'b'
//     });
// });
// Send all other requests to the Angular app
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});

//Set Port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost:${port}`));