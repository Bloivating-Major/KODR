// 1. Reverse a String
// function reverseString(str) {
//     return str.split('').reverse().join('');
// }
// console.log(reverseString("hello")); // "olleh"

// // 2. Check for Palindrome
// function isPalindrome(str){
//     let lower = str.toLowerCase()
//     let final = lower.split('').reverse().join('');
//     if(final === lower){
//         return true;
//     }else{
//         return false;
//     }
// }
// console.log(isPalindrome('Madam')); // true

// // 3. FizzBuzz
// // Time Complexity: O(n), Space Complexity: O(1)
// function fizzBuzz() {
//     for (let i = 1; i <= 100; i++) {
//         let output = '';
//         if (i % 3 === 0) output += 'Fizz';
//         if (i % 5 === 0) output += 'Buzz';
//         console.log(output || i);
//     }
// }
// function fizzBuzz(){
//     for(let i = 1; i <= 100; i++){
//       (i%3===0 && i%5===0) ? console.log('FizzBuzz') : i%3 === 0 ? console.log('Fizz') : i%5 === 0 ? console.log('Buzz') : console.log(i);
//     }
// }
// fizzBuzz();

// // 4. Find Largest Number
// function findLargest(arr) {
//     let max = arr[0];
//     arr.forEach(element => {
//         if(element > max){
//             max = element;
//         }
//     });
//     return max;
// }
// console.log(findLargest([1,2,37,99,4,5]));

// // 5. Remove Duplicates
// // Time Complexity: O(n), Space Complexity: O(n)
// function removeDuplicates(arr) {
//     if (arr.length === 0) return [];

//     let uniqueArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (!uniqueArr.includes(arr[i])) {
//             uniqueArr.push(arr[i]);
//         }
//     }

//     return uniqueArr;
// }

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5,3, 5, 6, 4]));

// // 6. Sum of Digits
// // Time Complexity: O(log n), Space Complexity: O(1)
// function sumOfDigits(num) {
//     let sum = 0;
//     while(num > 0){
//         sum += num % 10;
//         num = Math.floor(num / 10);
//     }
//     console.log(sum);
// }
// sumOfDigits(1234);

// // 7. Anagram Check
// // Time Complexity: O(n log n), Space Complexity: O(1)
// function isAnagram(str1, str2) {
//     if(str1.length === str2.length){
//         const Anagram = str => str.toLowerCase().split('').sort().join('');
//         return Anagram(str1) === Anagram(str2);
//     }
//     return false;
// }
// console.log(isAnagram('listen', 'silent')); // true

// // 8. Count Vowels
// // Time Complexity: O(n), Space Complexity: O(1)
// function countVowels(string) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     let arr = string.toLowerCase().split('');

//     let filteredVowels = arr.filter((e)=>{
//         return vowels.includes(e)
//     })
//     console.log(filteredVowels.length);
// }

// countVowels('Hello World');

// // 9. Two Sum
// // Time Complexity: O(n), Space Complexity: O(n)
// function twoSum(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [map.get(complement), i];
//         }
//         map.set(nums[i], i);
//     }
//     return [];
// }

function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if ((nums[i] + nums[j]) === target) {
        return [i, j];
      }
    }
  }
}

let arr = [2, 7, 11, 15];
let ans = twoSum(arr, 9);
console.log(ans);


// // 10. Flatten Array
// // Time Complexity: O(n), Space Complexity: O(n)
// function flattenArray(arr) {
//     return arr.reduce((flat, item) => {
//         return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
//     }, []);

//     // Alternative using built-in method:
//     // return arr.flat(Infinity);
// }

// // Test cases
// console.log(reverseString("hello")); // "olleh"
// console.log(isPalindrome("madam")); // true
// console.log(findLargest([1, 5, 3, 9])); // 9
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4])); // [1, 2, 3, 4]
// console.log(sumOfDigits(123)); // 6
// console.log(isAnagram("listen", "silent")); // true
// console.log(countVowels("hello world")); // 3
// console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
// console.log(flattenArray([1, [2, [3, [4]]]])); // [1, 2, 3, 4]
