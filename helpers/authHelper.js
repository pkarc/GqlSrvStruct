/**
 * Created by pkarc on 23/06/17.
 */

const env = process.env.NODE_ENV || 'development';

const jsonwebtoken = require('jsonwebtoken');
const STRING = require('constants/string');
const ERROR = require('constants/error');
const NUMBER = require('constants/number');
const config = require('config/api')(env);

module.exports = {
  generateAuthToken(user) {
    const payload = {
      userId: user.id,
      userType: user.type
    };

    return jsonwebtoken.sign(payload, config.jwt.secret);
  },
  isAuthenticated(ctx) {
    if (!ctx.auth) throw new Error(ERROR.AUTH_UNAUTHORIZED);
  },
  hasAccess(user, accessibleTypes) {
    if (typeof accessibleTypes === 'string' && accessibleTypes !== user.userType) {
      throw new Error(ERROR.AUTH_ACCESS_DENIED);
    }

    if (accessibleTypes.indexOf(user.userType) < 0) throw new Error(ERROR.AUTH_ACCESS_DENIED);
  },
  isAdminOrSelf(user, requestedId) {
    if (!requestedId){
      return user.userType !== STRING.USER_TYPE_ADMIN ? user.userId : null;
    } else if (user.userType !== STRING.USER_TYPE_ADMIN && requestedId !== user.userId) {
      throw new Error(ERROR.AUTH_ACCESS_DENIED);
    } else if (user.userType === STRING.USER_TYPE_ADMIN) {
      return requestedId;
    } else {
      return user.userId;
    }
  },
  isAdmin(user) {
    return user.userType === STRING.USER_TYPE_ADMIN;
  }
};
