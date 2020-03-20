/**
 * Created by pkarc on 23/06/17.
 */
const mongoose = require('mongoose');

const ObjectId = mongoose.Schema.Types.ObjectId;

module.exports = {
  isObjectIdOrType(obj, deftype) {
    console.log('Resolve Type:', obj);
    if (obj instanceof ObjectId) {
      return 'String';
    }
    return deftype;
  }
};
