/**
 * Created by pkarc on 23/06/17.
 */
const mongoHelper = require('helpers/mongoHelper');

module.exports = {
  Question: {
    __resolveType(obj, context, info) {
      return mongoHelper.isObjectIdOrType(obj, 'Question');
    }
  }
};
