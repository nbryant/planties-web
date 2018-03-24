import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    const { id } = params;
    return this.get('store').findRecord('plant', id);
  }
});
