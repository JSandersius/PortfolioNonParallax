// *** Dependencies
// =============================================================
const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000;


// Sets up the Express App
// =============================================================
const app = express();
var PORT = process.env.PORT || 8000;

// Static directory
app.use(express.static("public"));


// Routes
// =============================================================
module.exports = function (app) {

    // Each of the below routes just handles the HTML page that the user gets sent to.

    // index route loads view.html

    //_________
    app.get('/', (req, res) => {
        res.send('index.html')
    });

    //Create HTTP server and listen on port 3000 for requests
    const server = http.createServer((req, res) => {

        //Set the response HTPP header with HTTP status and Content type
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Hello World\n');
    });

    //listen for request on port 3000, and as a callback function have the port listened on logged
    app.listen(8000, () => {
        console.log('Example app listening on port 8000!')
    });

