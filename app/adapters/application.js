import DS from 'ember-data';
import AdapterFetch from 'ember-fetch/mixins/adapter-fetch';
import config from '../config/environment';

export default DS.JSONAPIAdapter.extend(AdapterFetch, {
  host: config.apiHost,
});
