'use strict';

const paths = require('../paths');

const addAppPath = path => `${paths.appPath}/${path}`;

const moduleResolver = (src = "['']") =>
  src
    .replace(/([[\],])/g, '')
    .split(' ')
    .map(addAppPath);

const getArg = (argv, defaultValue) => {
  const value = process.argv.slice(2).find(i => i.includes(argv));
  return (value && value.replace(`${argv}=`, '')) || defaultValue;
};

module.exports = {
  addAppPath,
  moduleResolver,
  getArg,
};
