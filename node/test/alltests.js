const assert = require("assert");
const http = require('http');

describe('Redis and Express Tests', function() {
  it('should connect to Redis', async function() {
    const redis = require('redis');
    const client = redis.createClient({ url: 'redis://redis:6379' });
    await client.connect();
    assert.ok(client.isOpen, "Redis client failed to connect");
    client.disconnect();
  });

  it('should increment counter', async function() {
    const redis = require('redis');
    const client = redis.createClient({ url: 'redis://redis:6379' });
    await client.connect();
    const initial = await client.get('counter') || 0;
    const result = await client.incr('counter');
    assert.strictEqual(result, +initial + 1, "Counter did not increment correctly");
    client.disconnect();
  });

  it('should respond from root endpoint', function(done) {
    http.get('http://localhost:8080', function(response) {
      let data = '';
      response.on('data', chunk => data += chunk);
      response.on('end', () => {
        assert.match(data, /This page has been viewed \d+ times!/, "Incorrect response from root endpoint");
        done();
      });
    });
  });
});
