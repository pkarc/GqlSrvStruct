/**
 * Created by ivan on 6/19/2017.
 */
const env = process.env.NODE_ENV || 'development';

const Mongoose = require('mongoose');
const config = require('config/mongo')(env);

Mongoose.Promise = global.Promise;
const mongo = Mongoose.connect(`mongodb://${config.host}/${config.database}`, {
  server: {
    reconnectTries: Number.MAX_VALUE
  }
}).catch((connectError) => {
  console.error('Could not connect to MongoDB', connectError);
});

module.exports = mongo;
