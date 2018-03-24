import EmberObject from '@ember/object';
import RouteWithFetchMixin from 'planties-web/mixins/route-with-fetch';
import { module, test } from 'qunit';

module('Unit | Mixin | route-with-fetch', function() {
  // Replace this with your real tests.
  test('it works', function (assert) {
    let RouteWithFetchObject = EmberObject.extend(RouteWithFetchMixin);
    let subject = RouteWithFetchObject.create();
    assert.ok(subject);
  });
});
