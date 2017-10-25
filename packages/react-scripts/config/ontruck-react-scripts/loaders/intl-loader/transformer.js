'use strict';

/**
 * Transforms JSON Object to string width dot notation
 *
 * @param {Object} JSON object
 * @param {string} [base='']
 * @returns {string}
 */

const transformJSON = (obj, base = '') => (
  Object.keys(obj).reduce((acc, key) => {
    const newBase = base ? `${base}.${key}` : key;
    if (typeof obj[key] === 'object') {
      return Object.assign(acc, transformJSON(obj[key], newBase));
    }
    return Object.assign(acc, { [newBase]: obj[key] });
  }, {})
);

module.exports = {
  transformJSON,
};
