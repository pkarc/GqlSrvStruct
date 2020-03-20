/**
 * Created by pkarc on 12/06/17.
 */


const { makeExecutableSchema, addMockFunctionsToSchema } = require('graphql-tools');
const resolvers = require('./resolvers');
const types = require('./types');

//console.log(resolvers);
//console.log(types);

const SchemaDefinition = `
  schema {
    query: Query,
    mutation: Mutation
  }
`;

const logger = { log: e => console.log(e) };

const schema = makeExecutableSchema({
  typeDefs: [SchemaDefinition, ...types],
  resolvers,
  logger
});

// addMockFunctionsToSchema({ schema });

module.exports = schema;
