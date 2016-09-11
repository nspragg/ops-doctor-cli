const _ = require('lodash');

class Diagnostics {
  constructor(diagnostics) {
    this.diagnostics = diagnostics || [];
  }

  // verify() {
  //
  // }

  fromIds(ids) {
    const diagnostics = ids.map((id) => {
      return this.byId(id);
    });

    return new Diagnostics(diagnostics);
  }

  byId(id) {
    return this.diagnostics[id];
  }

  all() {
    return this.diagnostics;
  }

  getDescriptions() {
    return _.map(this.diagnostics, 'description');
  }

  getNames() {
    return _.map(this.diagnostics, 'name');
  }
}

module.exports = Diagnostics;
