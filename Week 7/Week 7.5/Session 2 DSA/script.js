function Question1() {
  // This is Question 1 to check the frequency of a character in a string.
  let s = "hello";
  let arr = new Array(26).fill(0);
  console.log(s);
  for (let i = 0; i < s.length; i++) {
    let ascii = s.charCodeAt(i);
    arr[ascii - 97]++;
    console.log(arr);
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      console.log(String.fromCharCode(i + 97) + " = " + arr[i]);
    }
  }
}

function Question2() {
// Question 2 To check anagram
// efficient approach 
let s1 = "hello";
let s2 = "lleoh";

let arr = new Array(26).fill(0);

if (s1.length != s2.length) console.log("False");
else {
  for (let i = 0; i < s1.length; i++) {
    arr[s1.charCodeAt(i) - 97]++;
    arr[s2.charCodeAt(i) - 97]--;
  }
  let isAnagram = true;
  for (let i = 0; i < 26; i++) {
    if (arr[i] > 0) {
      isAnagram = false;
      break;
    }
  }
  if (isAnagram) console.log("True");
  else console.log("False");
}
}

// inefficient approach
// let s1 = "hello";
// let s2 = "lleoh";

// let arr1 = new Array(26).fill(0);
// let arr2 = new Array(26).fill(0);

// if(s1.length!= s2.length) console.log("False");
// else {
//     for(let i=0; i<s1.length; i++){
//         arr1[s1.charCodeAt(i) - 97]++;
//         arr2[s2.charCodeAt(i) - 97]++;
//     }
//     let isAnagram = true;
//     for(let i=0; i<26; i++){
//         if(arr1[i] != arr2[i]) {
//             isAnagram = false;
//             break;
//         }
//     }
//     if(isAnagram)console.log("True");
//     else console.log("False");
// }


