import DS from 'ember-data';

export default DS.Model.extend({
  events: DS.hasMany(),

  common_name: DS.attr('string'),
  light: DS.attr('number'),
  scientific_name: DS.attr('string'),
});
