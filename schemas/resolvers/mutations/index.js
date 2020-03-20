/**
 * Created by ivan on 6/19/2017.
 */
const merge = require('lodash.merge');
const fs = require('fs');
const path = require('path');

const mutationsResolvers = {};

fs.readdirSync(path.join(__dirname)).forEach((file) => {
  if (file !== 'index.js') {
    const resolvers = require(`./${file}`);
    merge(mutationsResolvers, resolvers);
  }
});

module.exports = {
  Mutation: mutationsResolvers
};
