'use strict';


/**
 * log to an account
 * Log into your account by providing the email and password.
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.logIn = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * create an account
 * Create an account by providing an email and a password
 *
 * body User  (optional)
 * no response value expected for this operation
 **/
exports.signIn = function(body) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


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

