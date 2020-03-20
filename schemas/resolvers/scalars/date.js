/**
 * Created by ivan on 6/19/2017.
 */

const { GraphQLScalarType } = require('graphql');
const { Kind } = require('graphql/language/kinds');

const DateScalar = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  parseValue(value) {
    return new Date(value*1000); // value from the client in seconds
  },
  serialize(value) {
    return value.toISOString(); // value sent to the client
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(parseInt(ast.value)*1000);
    }
    if (ast.kind === Kind.STRING) {
      return Date.parse(ast.value);
    }
    return null;
  }
});

module.exports = {
  Date: DateScalar
};
