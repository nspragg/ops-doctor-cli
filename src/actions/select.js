const inquirer = require('inquirer');
const loader = require('../loader');
const Runner = require('../runner');
const fmt = require('../fmt');

const DIAGNOSTICS = loader();

function buildChoices(diagnostics) {
  return diagnostics.getDescriptions()
    .map((choice, i) => {
      return {
        name: choice,
        value: i
      };
    });
}

function buildPrompt(diagnostics) {
  return {
    type: 'checkbox',
    message: 'Select diagnostics',
    name: 'diagnostics',
    choices: buildChoices(diagnostics),
    validate: (answer) => {
      if (answer.length < 1) return 'You must select a diagnostic to run';
      return true;
    }
  };
}

function run(choices) {
  const ids = choices.diagnostics;

  return new Runner()
    .register(DIAGNOSTICS.fromIds(ids))
    .run()
    .then(fmt.printResults);
}

module.exports = () => {
  inquirer.prompt(buildPrompt(DIAGNOSTICS))
    .catch(console.error)
    .then(run);
};
