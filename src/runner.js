const Doctor = require('ops-doctor');
const Diagnostics = require('./diagnostics');

const expect = Doctor.expect;

function addDescription(descriptions) {
  return (result, i) => {
    return {
      type: result.type,
      ok: result.ok,
      description: descriptions[i]
    };
  };
}

class Runner {
  constructor() {
    this.doctor = Doctor.create();
    this.diagnostics = new Diagnostics();
  }

  register(diagnostics) {
    this.diagnostics = diagnostics;

    diagnostics.all().forEach((diagnostic) => {
      const {
        name,
        args,
        expected
      } = diagnostic;

      this.doctor[name](args, expect(expected));
    });

    return this;
  }

  run() {
    const descriptions = this.diagnostics.getDescriptions();
    return this.doctor
      .run()
      .map(addDescription(descriptions));
  }
}

module.exports = Runner;
