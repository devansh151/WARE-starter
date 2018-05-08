const express = require('express');
const router = express.Router();
var request = require('request');

var username='devansh151';
var password='123456';

router.route('/getProjects',(req,res)=>{
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

/* GET api listing. */
router.route('/createIssue').get((req, response) => {
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
});


module.exports = router;