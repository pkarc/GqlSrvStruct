/**
 * Created by pkarc on 12/06/17.
 */


module.exports = () => [question];

const question = `

  type question {
    _id: String
    value: String
    type: String
    status: String
  }

  extend type Query {
    questions():[question]!
  }

  extend type Mutation{
    addQuestion(question:questionInput): question
  }

`;
