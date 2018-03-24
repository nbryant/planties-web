import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plants/show', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:plants/show');
    assert.ok(route);
  });
});
