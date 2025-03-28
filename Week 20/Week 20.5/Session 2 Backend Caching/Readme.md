### **Using Memoization for Caching**
Since your loop runs **100 crore times**, we can **cache results** in an object (for small-scale caching) or use an **LRU cache** for efficient storage.  

---

## **Solution 1: Using a JavaScript Object for Simple Caching**
If the function’s input repeats, store previous results to return them instantly instead of recomputing.  
```js
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
```
### **Optimization:**
- **First Run:** Takes time (actual computation).  
- **Second Run:** Returns instantly using cache.  

This is useful when the function is **deterministic** (i.e., same input always gives same output).  

---

## **Solution 2: Using Map (Better for Large-Scale Caching)**
Instead of an object, use `Map()` for better performance when caching large data.  
```js
const cache = new Map();

function optimizedComputation(n) {
  if (cache.has(n)) return cache.get(n);

  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += n * 2;
  }

  cache.set(n, result);
  return result;
}
```

---

## **Solution 3: Using LRU Cache for Memory Efficiency**
If multiple inputs are used and caching grows large, use **Least Recently Used (LRU) Cache** to remove old data.  
```js
class LRUCache {
  constructor(limit = 5) {
    this.cache = new Map();
    this.limit = limit;
  }

  get(key) {
    if (!this.cache.has(key)) return null;
    const value = this.cache.get(key);
    this.cache.delete(key);
    this.cache.set(key, value); // Move accessed key to the end (most recent)
    return value;
  }

  set(key, value) {
    if (this.cache.size >= this.limit) {
      const firstKey = this.cache.keys().next().value;
      this.cache.delete(firstKey); // Remove least recently used
    }
    this.cache.set(key, value);
  }
}

const lruCache = new LRUCache(3);

function computeWithLRU(n) {
  let cached = lruCache.get(n);
  if (cached !== null) return cached;

  let result = 0;
  for (let i = 0; i < 1_000_000_000; i++) {
    result += n * 2;
  }

  lruCache.set(n, result);
  return result;
}
```
### **Why LRU?**
- **Prevents memory overload** by keeping only recent results.  
- **Auto-removes old unused cache** entries.  

---

## **Best Approach for Your Use Case**
| Use Case | Solution |
|----------|---------|
| Small dataset, simple caching | **JavaScript Object (`{}`)** |
| Large dataset, faster lookups | **Map (`new Map()`)** |
| Memory efficiency, auto-clear old data | **LRU Cache** |

If your loop runs **100 crore times** and repeats computations, caching will **significantly reduce execution time**.

Would you like an example with actual numbers to measure speed improvements? 🚀