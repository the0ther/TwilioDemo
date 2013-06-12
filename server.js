// Load the twilio module

'use strict';
// The App
var express = require('express');
var app = express();
var twilio = require('twilio');

var config = config || {
  development: {
    port: 8888
  },
  staging: {
    port: 8888
  },
  production: {
    port: 8888
  }
};

// Use the bodyParser middleware.
app.use(express.bodyParser());

/**
 * CORS support.
 */
app.use(function (req, res, next) {
  //console.log('entering the CORS section');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'X-Requested-With');

  // respond immediately on OPTIONS/preflighting
  if (req.method === 'OPTIONS') {
    res.send(200);
  } else {
    next();
  }
});

// Create HTTP server with your app
var http = require('http');
var server = http.createServer(app);

app.post('/sendAppLink', function (req, res) {
  var client = new twilio.RestClient('AC4a0952b84dea9799ceda6d45cb3f9e76', '6cb22db9fa08651396fbcf230d85fec5');
  var phone = req.param('To');
  var body = req.param('Body');
  var data = {
    "to": phone,
    "from": "+19175128334",
    "body": body
  };

  client.sms.messages.create(data, function (error, message) {
    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
      // The second argument to the callback will contain the information
      // sent back by Twilio for the request.  In this case, it is the
      // information about the text messsage you just sent:
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);

      console.log('Message sent on:');
      console.log(message.dateCreated);
      res.send(200);
    } else {
      console.log('Oops! There was an error.', error);
      res.send(500);
    }
  });
});

// I dont like this, but I cannot use POST because of IE problems
app.post('/sendBrabble', function (req, res) {
  var client = new twilio.RestClient('AC4a0952b84dea9799ceda6d45cb3f9e76', '6cb22db9fa08651396fbcf230d85fec5');
  var phone = req.param('To');
  var body = req.param('Body');
  var data = {
    "to": phone,
    "from": "+19175128334",
    "body": body
  };

  client.sms.messages.create(data, function (error, message) {

    // The "error" variable will contain error information, if any.
    // If the request was successful, this value will be "falsy"
    if (!error) {
      // The second argument to the callback will contain the information
      // sent back by Twilio for the request.  In this case, it is the
      // information about the text messsage you just sent:
      console.log('Success! The SID for this SMS message is:');
      console.log(message.sid);

      console.log('Message sent on:');
      console.log(message.dateCreated);
      res.send(200);
    } else {
      console.log('Oops! There was an error.', error);
      res.send(500);
    }
  });
});

server.listen(config[app.get('env')].port);