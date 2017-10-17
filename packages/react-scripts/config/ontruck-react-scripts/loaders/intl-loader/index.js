'use strict';

module.exports = function(content) {
  return JSON.stringify(require('./transformer').transformJSON(JSON.parse(content)));
};
