// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

<<<<<<< Updated upstream
=======
const router = express.Router();
var request = require('request');
var fs=require('fs');
var username='devansh151';
var password='123456';

>>>>>>> Stashed changes
// Get our API routes
const api = require('./routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, '../dist')));

// Set our api routes
<<<<<<< Updated upstream
app.use('/api/*', api);
=======
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
            console.log(body);
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

// app.post('/api/createIssue',(req,response)=>{
//   let id=8736826321;
//   let table='||CAR||SEGMENT||ENTR||\n\
//   |KA01U5388|Bangalore-1|-10%|\n\
//   |KA01U5388|Bangalore-1|-10%|\n\
//   |Col B1|Col B2|Col C2|\n\
//   |Col C1|Col C2|Col C3|';
//   let docLink="http://diskonline.s3.amazonaws.com/admin/Home/husky.jpg";
//   let city="Bangalore";

//   var options = {
//     url: 'http://localhost:8080/rest/api/2/field',
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//         'Authorization':'Basic ' + new Buffer(username + ':' + password).toString("base64")
//     },
//     params:{
//         os_authType:'basic'
//     }
//   }
//   request.get(options, function(error, res, body) {
//     if (!error) {
//         console.log(body);
//         let docIdKey=findKey(JSON.parse(body),"Document ID");
//         let tableIdKey=findKey(JSON.parse(body),"Violations Table");
//         let DocLinkIdKey=findKey(JSON.parse(body),"Document Link");
//         let cityIdKey=findKey(JSON.parse(body),"City");
       
//         var reqObj={
//             fields: {
//               project:
//               { 
//                   key: "PE"
//               },
//               summary: "REST ye merry gentlemen",
//               description:"jdksaskla dsask",
//               issuetype: {
//                   name: "Bug"
//               }
//           }
//         }
//         reqObj.fields[docIdKey]=id+'';
//         reqObj.fields[tableIdKey]=table;
//         reqObj.fields[DocLinkIdKey]=docLink;
//         reqObj.fields[cityIdKey]=city;

//         var op = {
//         url: 'http://localhost:8080/rest/api/2/issue',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//             'Accept': 'application/json',
//             'Authorization':'Basic ' + new Buffer(username + ':' + password).toString("base64")
//         },
//         params:{
//             os_authType:'basic'
//         },
//         body:JSON.stringify(reqObj)
//       }
//       request.post(op, function(error, res, body) {
//           if (!error) {  
//               console.log(body);
//               response.setHeader("Content-Type", 'application/json');
//               response.status(res.statusCode);
//               response.send(body);



//           } else {

//               response.setHeader("Content-Type", 'application/json');
//               response.status(500);
//               response.send("Something went wrong");
//           }
//       });
//     } else {
//         response.setHeader("Content-Type", 'application/json');
//         response.status(500);
//         response.send("Something went wrong");
//     }
//   });
// })


app.post('/api/createIssue',(req,response)=>{
  let id=8736826321;
  let table='||CAR||SEGMENT||ENTR||\n\
  |KA01U5388|Bangalore-1|-10%|\n\
  |KA01U5388|Bangalore-1|-10%|\n\
  |Col B1|Col B2|Col C2|\n\
  |Col C1|Col C2|Col C3|';
  let docLink="http://diskonline.s3.amazonaws.com/admin/Home/husky.jpg";
  let city="Bangalore";

  var options = {
    url: 'http://localhost:8080/rest/api/2/field',
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
        console.log(body);
        let docIdKey=findKey(JSON.parse(body),"Document ID");
        let tableIdKey=findKey(JSON.parse(body),"Violations Table");
        let DocLinkIdKey=findKey(JSON.parse(body),"Document Link");
        let cityIdKey=findKey(JSON.parse(body),"City");
       
        var reqObj={
            fields: {
              project:
              { 
                  key: "PE"
              },
              summary: "REST ye merry gentlemen",
              description:"jdksaskla dsask",
              issuetype: {
                  name: "Bug"
              }
          }
        }
        reqObj.fields[docIdKey]=id+'';
        reqObj.fields[tableIdKey]=table;
        reqObj.fields[DocLinkIdKey]=docLink;
        reqObj.fields[cityIdKey]=city;

        var op = {
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
      request.post(op, function(error, res, body) {
          if (!error) {  
              console.log(body);
              response.setHeader("Content-Type", 'application/json');
              response.status(res.statusCode);
              response.send(body);



          } else {

              response.setHeader("Content-Type", 'application/json');
              response.status(500);
              response.send("Something went wrong");
          }
      });
    } else {
        response.setHeader("Content-Type", 'application/json');
        response.status(500);
        response.send("Something went wrong");
    }
  });
})

app.post('/api/webhook',(req,response)=>{

  console.log('*****webhook called!!!*******');
  console.log(req);
  let id=req.body.issue.id;
  var options = {
    url: 'http://localhost:8080/rest/api/2/issue/'+id+'?expand=names',
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
  request.get(options,(error, res, body)=> {
      if (!error) {
        let documentKey=null;
        let data=JSON.parse(body);
        Object.keys(data.names).forEach((key)=> {
          if(data.names[key]==='Document ID')
            documentKey=key;
        });
        console.log(data.fields[documentKey]);
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
>>>>>>> Stashed changes

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