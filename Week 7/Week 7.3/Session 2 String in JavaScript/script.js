// Simple string they are immutable
// let s = "Hello";
// s = "Hello " + "Wrold";
// console.log(s);

// We are concatinating string because we cannot change it
// let s2 = "Hello ";
// console.log(s2.concat("Hello"));
// console.log(s2);

// printing a string using js
// let s2 = "Hello";
// for (let i = 0; i < s2.length; i++) {
//   console.log(s2.charAt(i));
// }
// console.log();
// for (let i = s2.length - 1; i >= 0; i--) {
//   console.log(s2.charAt(i));
// }

// 4. Solving a question to reverse a string.
// let arr = "hello";
// let reverse = "";
// for (let i = arr.length - 1; i >= 0; i--) {
//   reverse += arr[i];
// }
// console.log(arr);
// console.log(reverse);

// 5. Solving Palindrome Question
// let s = "Madam";
// s = s.toLowerCase();
// let isPallindrome = true;
// let i = 0;
// let j = s.length - 1;
// while (i < j) {
//   if (s[i] != s[j]) {
//     isPallindrome = false;
//     break;
//   }
//   i++;
//   j--;
// }
// console.log(isPallindrome);

// 6. Solving Consonents and Vowels and Spaces Question
// let arr = "Hello There this is Sambhav55555";
// let vowelCount = 0,
//   consonentCount = 0,
//   totalCount = 0,
//   numberCount = 0,
//   spaceCount = 0;
// for (let i = 0; i < arr.length; i++) {
//   let char = arr[i];
//   if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u")
//     vowelCount++;
//   else if (char == " ") spaceCount++;
//   else if (arr.charCodeAt(i) >= 48 && arr.charCodeAt(i) <= 57) numberCount++;
//   else consonentCount++;
// }
// totalCount = vowelCount + consonentCount + numberCount + spaceCount;
// console.log(
//   `Vowels : ${vowelCount}, Consonants : ${consonentCount}, Spaces : ${spaceCount}, Number : ${numberCount}, Total : ${totalCount}`
// );