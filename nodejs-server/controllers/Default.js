'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.logIn = function logIn (req, res, next, body) {
  Default.logIn(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.signIn = function signIn (req, res, next, body) {
  Default.signIn(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.test = function test (req, res, next) {
  Default.test()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
