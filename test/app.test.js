const { test, before, after } = require('node:test');
const assert = require('node:assert');
const app = require('../app');

let server;
let url;

before(async () => {
  await new Promise((resolve) => {
    server = app.listen(0, () => {
      url = `http://127.0.0.1:${server.address().port}`;
      resolve();
    });
  });
});

after(() => server.close());

test('GET / returns the hello message', async () => {
  const res = await fetch(url + '/');
  assert.strictEqual(res.status, 200);
  const body = await res.json();
  assert.match(body.message, /Hello/);
});