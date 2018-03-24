import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | plants/index', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /plants', async function(assert) {
    await visit('/plants');

    assert.equal(currentURL(), '/plants');
  });
});
