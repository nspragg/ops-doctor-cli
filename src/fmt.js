const columnify = require('columnify');
const text = require('./text');

const COLUMNS = [
  'Status',
  'type',
  'description'
];
const DELIMITER = ' | ';
const SUCCESS = '✓';
const FAILURE = '✖';

function getStatus(result) {
  return result.ok ? text.success(SUCCESS + ' Passed') : text.failure(FAILURE + ' Failed');
}

function toRow(result) {
  const status = getStatus(result);
  return {
    type: result.type,
    description: result.description,
    Status: status
  };
}

export function printResults(results) {
  const data = results.map(toRow);

  console.log(columnify(data, {
    columns: COLUMNS,
    columnSplitter: DELIMITER
  }));
}
