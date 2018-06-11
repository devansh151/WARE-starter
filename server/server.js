// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
//app.use('/api/*', api);

app.get('/api/getFlowchart', (req, response) => {
  let body={
    nodes:[
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ],
    edges:[
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5}
    ]
  }
  setTimeout(()=>{
    response.setHeader("Content-Type", 'application/json');
    response.status(200);
    response.send(body);
  },5000)
  

});

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

function findKey(body,label){
  let index=body.findIndex((item)=>{
    if(item.name===label)
      return true;
    return false;
  });
  return body[index].id;
}
/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => console.log(`API running on localhost:${port}`));