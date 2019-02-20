
//!! These libraries/files are installed by
//!! npm install, check in the package.json
const express = require('express');
const server = express();
const http = require('http').Server(server);

/**
 * Library directory (libs)
 */
server.use(express.static('../../'));

/**
 * Webpage directory
 */
server.use(express.static('./webpage'));


/**
 * HTTP port
 */
const PORT = 9000;

/**
 * Start the HTTP server
 */
http.listen(PORT, function() {
   console.log('listening on *: ' + PORT);
});


/**
 * Homepage request
 */
server.get('/', function(request, response) {
    response.sendFile(__dirname + '/index.html');
});

