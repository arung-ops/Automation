const base = require('@playwright/test');

exports.test = base.test.extend({
  // Shared setup hooks can be added here
});

exports.expect = base.expect;
