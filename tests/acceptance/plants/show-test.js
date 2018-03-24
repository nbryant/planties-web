import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | plants/show', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /plants/:id', async function(assert) {
    await visit('/plants/1');

    assert.equal(currentURL(), '/plants/1');
  });
});
