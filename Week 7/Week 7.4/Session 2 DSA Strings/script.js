function question1() {
  let s = "HELLO world";
  let t = "";

  for (let i = 0; i < s.length; i++) {
    if (s[i].charCodeAt() >= 65 && s[i].charCodeAt() <= 90) {
      // Uppercase to lowercase
      t += String.fromCharCode(s[i].charCodeAt() + 32);
    } else if (s[i].charCodeAt() >= 97 && s[i].charCodeAt() <= 122) {
      // Lowercase to uppercase
      t += String.fromCharCode(s[i].charCodeAt() - 32);
    } else {
      // Retain spaces and special characters
      t += s[i];
    }
  }
  console.log(t);
}

function StringMethods() {
  let s = " hello bhai%hello hello hello";
  console.log(s.toLowerCase()); // Convert to lowercase
  console.log(s.toUpperCase()); // Convert to uppercase
  console.log(s.concat(" coding")); // Concatenate with another string
  console.log(s.endsWith("s")); // Check if ends with 's'
  console.log(s.startsWith("ans")); // Check if starts with 'ans'
  console.log(s.includes("bhai")); // Check if includes 'bhai'
  console.log(s.substring(3, 5)); // Extract substring
  console.log(s.replaceAll("hello", "hey")); // Replace all occurrences of 'hello'
  console.log(s.split("%")); // Split string at '%'
  console.log(s.length); // Length of the string
  console.log(s.trimEnd()); // Trim trailing spaces
}

function question2() {
  let words = ["pay", "attire", "practice", "attend"];
  let pref = "at";
  let ans = [];

  words.forEach((word) => {
    if (word.startsWith(pref)) {
      ans.push(word);
    }
  });

  let result = "Words starting with pref = " + ans.join(", ");
  console.log(result);
}

function question3() {
  let arr = "Hello bhai kya hal chal";
  let splitedArr = arr.split(" ");

  for (let i = 0; i < splitedArr.length; i++) {
    console.log(
      splitedArr[i].charAt(0).toUpperCase() + splitedArr[i].substring(1)
    );
  }
}
