var express = require('express'),
    http = require('http'),
    redis = require('redis');

var app = express();

console.log(process.env.REDIS_PORT_6379_TCP_ADDR + ':' + process.env.REDIS_PORT_6379_TCP_PORT);

// APPROACH 1: Using environment variables created by Docker
// var client = redis.createClient(
// 	process.env.REDIS_PORT_6379_TCP_PORT,
//   	process.env.REDIS_PORT_6379_TCP_ADDR
// );

// APPROACH 2: Using host entries created by Docker in /etc/hosts (RECOMMENDED)
// Updated for Redis client v4+ using URL
var client = redis.createClient({
  url: 'redis://redis:6379'
});

// Connect to Redis
client.connect().catch(console.error);


app.get('/', async function(req, res, next) {
  try {
    const counter = await client.incr('counter');
    const hostname = require('os').hostname();
    res.send('This page has been viewed ' + counter + ' times!\nServed by container: ' + hostname);
  } catch(err) {
    return next(err);
  }
});

http.createServer(app).listen(process.env.PORT || 8080, function() {
  console.log('Listening on port ' + (process.env.PORT || 8080));
});