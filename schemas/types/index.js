/**
 * Created by ivan on 6/19/2017.
 */
const fs = require('fs');
const path = require('path');

const types = [];

fs.readdirSync(path.join(__dirname)).forEach((file) => {
  if (file !== 'index.js') {
    types.push(require(`./${file}`));
  }
});

module.exports = types;
