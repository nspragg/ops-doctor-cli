const DEFAULT_SPEC = `${process.env.HOME}/.ops-doctor/spec`;
const Diagnostics = require('./diagnostics');

module.exports = (spec) => {
  spec = spec || DEFAULT_SPEC;
  return new Diagnostics(require(spec));
};
