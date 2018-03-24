import Mixin from '@ember/object/mixin';
import fetch from 'fetch';

export default Mixin.create({
  fetch() {
    fetch.call(this, ...arguments);
  },
});
