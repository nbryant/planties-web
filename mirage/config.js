// config for development + test environments
export default function() {
}

export function testConfig() {
  this.logging = true;
  this.urlPrefix = 'http://localhost:3000';

  this.get('/plants');
}
