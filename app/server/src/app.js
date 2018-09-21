var http = require('http');

const iterations = 50;
const multiplier = 1000000000;

function calculatePrimes(iterations, multiplier) {
  console.log("Writing primes...")
  var primes = [];
  for (var i = 0; i < iterations; i++) {
    var candidate = i * (multiplier * Math.random());
    var isPrime = true;
    for (var c = 2; c <= Math.sqrt(candidate); ++c) {
      if (candidate % c === 0) {
          // not prime
          isPrime = false;
          break;
       }
    }
    if (isPrime) {
      primes.push(candidate);
    }
  }
  console.log("Completed.")
  return primes;
}

var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end(JSON.stringify(calculatePrimes(iterations, multiplier)));
};
var www = http.createServer(handleRequest);
www.listen(8080);
