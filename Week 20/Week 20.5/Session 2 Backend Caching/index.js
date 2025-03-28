const cache = {}; // Object to store computed results

function heavyComputation(n) {
  if (cache[n] !== undefined) {
    return cache[n]; // Return cached result if available
  }

  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += n * 2; // Simulating heavy computation
  }

  cache[n] = result; // Store result in cache
  return result;
}

console.time("First Run");
console.log(heavyComputation(5)); // Runs loop
console.timeEnd("First Run");

console.time("Second Run");
console.log(heavyComputation(5)); // Returns cached result instantly
console.timeEnd("Second Run");
