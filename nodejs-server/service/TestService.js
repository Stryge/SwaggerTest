'use strict';


/**
 * route to test swagger codegen
 *
 * returns String
 **/
exports.test = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "is OK";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

