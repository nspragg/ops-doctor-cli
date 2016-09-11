const colours = require('chalk');

module.exports.success = function (message) {
  return `\t${colours.green(message)}\n`;
};

module.exports.failure = function (message) {
  return `\t${colours.red(message)}\n`;
};

module.exports.warn = function (message) {
  return `\t${colours.red(message)}\n`;
};
