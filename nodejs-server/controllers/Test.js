'use strict';

var utils = require('../utils/writer.js');
var Test = require('../service/TestService');

module.exports.test = function test (req, res, next) {
  Test.test()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
