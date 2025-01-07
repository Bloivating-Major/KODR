function Question1() {
  // [5, 8, 1, 2, 5, 6, 8, 8, 6, 6, 3, 4, 4]
  // Approach.
  let arr = [5, 8, 1, 2, 5, 6, 8, 8, 6, 6, 3, 4, 4, 5];

  for (let i = 0; i < arr.length; i++) {
    let count = 1;
    if (arr[i] != -1) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] == arr[i]) {
          count++;
          arr[j] = -1;
        }
      }
      console.log(arr[i] + " comes " + count + " times.");
    }
  }
}


function Question2() {
  let arr = [1, 2, 3, 7, 5, 12];
  let sum = 12;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let ans = 0;
    for (let j = i; j < arr.length; j++) {
      ans += arr[j];
      if (ans == sum) count++;
    }
  }
  console.log("Sum = 12 comes " + count + " times.");
}


function Question3() {
  //leetcode 2309
//   let s = "arRAzFif";
let s = "AbCdEfGhIjK"
  let lower = new Array(26).fill(0);
  let upper = new Array(26).fill(0);
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (charCode >= 97 && charCode <= 122) {
      lower[s.charCodeAt(i) - 97]++;
    }
    if (charCode >= 65 && charCode <= 90) {
      upper[s.charCodeAt(i) - 65]++;
    }
  }
  for (let i = 25; i >= 0; i--) {
    if (upper[i]>0 && lower[i]>0) {
        let char = i+65;
        char = String.fromCharCode(char);
        return char;
    }
  }
  return "";
}

