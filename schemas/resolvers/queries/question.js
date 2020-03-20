const Question = require('models/question');
const AuthHelper = require('helpers/authHelper');
const STRING = require('constants/string');
const ARRAY = require('constants/array');

module.exports = {
  questions: (_, {}, ctx) => {
    AuthHelper.isAuthenticated(ctx);
    AuthHelper.hasAccess(ctx.auth, ARRAY.USER_TYPES);
    return Question.find({})
  },
};
