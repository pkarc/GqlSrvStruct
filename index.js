/**
 * Created by pkarc on 12/06/17.
 */

require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const express = require('express');
const https = require('https');
const http = require('http');
const { graphqlExpress } = require('apollo-server-express');
const schema = require('./schemas');
const jwt = require('express-jwt');
const config = require('./config/api')(env);

const app = express();

//app.use(express.json({limit: '10mb'}));

//CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", config.cors.origin);
  res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, Authorization, X-Requested-With, Content-Type, Accept");

  //intercepts OPTIONS method
  if ('OPTIONS' === req.method) {
    //respond with 200
    res.sendStatus(200);
  }
  else {
    //move on
    next();
  }
});

//app.use(helmet());

app.use(jwt({
  secret: config.jwt.secret,
  credentialsRequired: false,
  requestProperty: 'auth'
}));

let server = undefined;

if (process.env.API_USE_SSL === 'true') {
  server = https.createServer({
    key: fs.readFileSync(process.env.API_SSL_KEY),
    cert: fs.readFileSync(process.env.API_SSL_CERT)
  }, app)
} else {
  server = http.Server(app)
}

app.use('/graphql',
  function(err, req, res, next) {
    console.error(err);
    console.error(req.headers);
    console.error(req.user);
    next(err)
  },
  graphqlExpress(req => ({
    schema,
    context: { auth: req.auth }
  }))
);

if (process.env.API_USE_SSL === 'true') {
  server.listen(443);
} else {
  server.listen(config.port, () => console.log(`Query to: http://localhost:${config.port}/graphql`));
}