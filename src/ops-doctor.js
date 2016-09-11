const program = require('commander');
const fatal = require('./fatal');
program.version(require('../package'))

program
  .command('run')
  .description('Runs all diagnostics')
  .action(require('./actions/run'));

program
  .command('list [spec]')
  .description('list all diagnostics')
  .action(require('./actions/list'));

program
  .command('select')
  .description('select specific diagnostics to run')
  .action(require('./actions/select'));

try {
  program.parse(process.argv);
} catch (e) {
  fatal(e);
}

if (!program.args.length) program.help();
