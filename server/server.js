// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const router = express.Router();
var request = require('request');

var username='devansh151';
var password='123456';

// Get our API routes
//const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
//app.use('/api/*',api);

app.get('/api/getProjects',(req,response)=>{
  var options = {
      url: 'http://localhost:8080/rest/api/2/project',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization':'Basic ' + new Buffer(username + ':' + password).toString("base64")
      },
      params:{
          os_authType:'basic'
      }
    }
    request.get(options, function(error, res, body) {
        if (!error) {
            response.setHeader("Content-Type", 'application/json');
            response.status(res.statusCode);
            response.send(body);
        } else {
            response.setHeader("Content-Type", 'application/json');
            response.status(500);
            response.send("Something went wrong");
        }
    });
})

app.get('/api/getIssues',(req,response)=>{
  var options = {
      url: 'http://localhost:8080/rest/api/2/search?jql=project="PE"',
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Authorization':'Basic ' + new Buffer(username + ':' + password).toString("base64")
      },
      params:{
          os_authType:'basic'
      }
    }
    request.get(options, function(error, res, body) {
        if (!error) {
            response.setHeader("Content-Type", 'application/json');
            response.status(res.statusCode);
            response.send(body);
        } else {
            response.setHeader("Content-Type", 'application/json');
            response.status(500);
            response.send("Something went wrong");
        }
    });
})

app.post('/api/createIssue',(req,response)=>{
  var reqObj={
    "fields": {
       "project":
       { 
          "key": "PE"
       },
       "summary": "REST ye merry gentlemen.",
       "description": "Creating of an issue using project keys and issue type names using the REST API",
       "issuetype": {
          "name": "Bug"
       }
   }
}
var options = {
    url: 'http://localhost:8080/rest/api/2/issue',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization':'Basic ' + new Buffer(username + ':' + password).toString("base64")
    },
    params:{
        os_authType:'basic'
    },
    body:JSON.stringify(reqObj)
  }
  request.post(options, function(error, res, body) {
      if (!error) {
          console.log(body);
          response.setHeader("Content-Type", 'application/json');
          response.status(res.statusCode);
          response.send(body);
      } else {
          console.log(error);
          response.setHeader("Content-Type", 'application/json');
          response.status(500);
          response.send("Something went wrong");
      }
  });
})

// Catch all other routes and return the index file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4203';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));