const db = require('connectors/mongoose/models/question');

const STRING = require('constants/string');
const ERROR = require('constants/error');

module.exports = {
  findOneById: id => db.findById(id),
  findOne: filter => db.findOne(filter),
  find: filter => db.find(filter),

  createQuestion: (question) => {

    return db.create(question);

  },


};
