const _ = require('lodash');

const loader = require('../loader');
const Runner = require('../runner');
const fmt = require('../fmt');

const diagnostics = loader();

module.exports = () => {
  new Runner()
    .register(diagnostics)
    .run()
    .then(fmt.printResults);
};
