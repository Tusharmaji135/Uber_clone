const autocannon = require('autocannon');

const runTest = (url) => {
  autocannon({
    url,
    connections: 100, // Number of concurrent connections
    duration: 30, // Test duration in seconds
  }, (err, results) => {
    if (err) {
      console.error(`Error running autocannon for ${url}:`, err);
    } else {
      console.log(`Number of requests for ${url}:`, results.requests.total);
    }
  });
};

const urls = ['http://localhost:3000', 'http://localhost:3000/stress-test'];

urls.forEach(runTest);
