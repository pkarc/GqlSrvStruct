const Question = require('models/question');
const AuthHelper = require('helpers/authHelper');
const STRING = require('constants/string');

module.exports = {
  addQuestion: (_, { userId, code }, ctx) => {
    AuthHelper.isAuthenticated(ctx);
    AuthHelper.hasAccess(ctx.auth, [STRING.USER_TYPE_ADMIN]);
    return Question.createQuestion(userId, code);
  }
};
