/**
 * Created by ivan on 6/19/2017.
 */
const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const Connector = require('connectors/mongoose');
const STRING = require('constants/string');
const ARRAY = require('constants/array');

const QuestionSchema = new Schema({
  value: String,
  type:{
    type: String,
    enum: ARRAY.QUESTION_TYPES,
    required: true
  },
  status:{
    type: String,
    enum: ARRAY.QUESTION_STATUS,
    default: STRING.QUESTION_STATUS_ACTIVE
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);
