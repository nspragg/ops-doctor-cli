const columnify = require('columnify');
const loader = require('../loader');

const COLUMNS = ['id', 'description'];

module.exports = (spec) => {
  const diagnostics = loader(spec);

  const data = {};
  diagnostics.all().forEach((diagnostic, i) => {
    data[++i] = diagnostic.description;
  });

  console.log(columnify(data, {
    columns: COLUMNS
  }));
};
