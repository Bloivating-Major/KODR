// let arr = [10,12,10,12,4,1,2,4,2];
// let set = new Set();

// for(let i =0; i<arr.length; i++){
//     if(set.has(arr[i])) set.delete(arr[i]);
//     else set.add(arr[i]);
// }
// console.log(set);

function Question2() {
  // leetcode 771
  let jewels = "aA";
  let stones = "aAAbbbb";
  let count = 0;
  let set = new Set(jewels);
  for (let i = 0; i < stones.length; i++) {
    if (set.has(stones[i])) count++;
  }
  console.log(count);
}

Question2();

function Question1() {
  // leetcode 1832
  let sentence = "leetcode";
  let set = new Set();
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] >= "a" && sentence[i] <= "z") {
      set.add(sentence[i]);
    }
  }
  if (set.size == 26) console.log("Panagram");
  else console.log("Not Panagram");
}

// Question1();
