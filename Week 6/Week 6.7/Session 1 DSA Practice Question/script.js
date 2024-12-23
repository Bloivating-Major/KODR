function question1() {
  let n = 5; // this is square pattern question.

  for (let i = 0; i < n; i++) {
    // this is square pattern question outer loop
    for (let j = 0; j < n; j++) {
      // this is square pattern question inner loop
      process.stdout.write("* ");
    }
    // this is to print new line when inner loop is finished
    console.log();
  }
}

function question2() {
  let n = 5; // this is triangle pattern question.

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function question2() {
  let n = 5; // this is triangle pattern question.

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write("* ");
    }
    console.log();
  }
}

function question3() {
  let n = 5; // this is pattern right triangle (Number) question.

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${j} `);
    }
    console.log();
  }
}

function question4() {
  let n = 5; // this is pattern right triangle (Alphabet) question.

  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(`${String.fromCharCode(65 + j)} `);
    }
    console.log();
  }
}

function question5() {
  // sum of array elements question.

  let arr = [10, 15, 20, 25, 30]; // creating a new array

  let sum = 0; // sum varible

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // traversing the array and then updating the sum variable.
  }
  console.log(sum); // log the sum.
}

function question6() {
  // max element in the array.

  let arr = [10, 5, 2, 37, 8]; // creating a new array

  let max = arr[0]; // max varible

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]; // traversing the array and then updating the max variable.
  }
  console.log(max); // log the max.
}

function question7() {
  // second max in the array.

  let arr = [10, 5, 2, 37, 8, 69, 69]; // creating a new array

  let max = Math.max(arr[0], arr[1]); // creating max variable
  let max2 = Math.min(arr[0], arr[1]); // creating max2 variable

  for (let i = 2; i < arr.length; i++) {
    if (arr[i] > max) {
      // comparing the max
      max2 = max;
      max = arr[i];
    } else if (arr[i] > max2 && arr[i] > max) {
      // comparing the second max
      max2 = arr[i];
    }
  }

  console.log("Maximum number is :", max); // log the max
  console.log("Second maximum number is :", max2); // log the second max.
}

function question8() {
  // Bubble Sort Algorithm.
  let arr = [4, 3, 6, 7, 11, 9]; // creating a new array
  let temp; // creating a temp variable
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr);
}

function question9() {
  let arr = [1, 2, 3, 4, 5]; // creating a new array
  let isSorted = true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      isSorted = false;
      break;
    }
  }

  console.log(`${isSorted ? "Array is Sorted" : "Array is Not Sorted"}`);
}

function question10(){
  //left rotation
  let arr = [1, 2, 3, 4, 5]; // creating a array
  let temp = arr[0];
  console.log(arr);
  for(let i = 0; i < arr.length-1; i++){
      arr[i] = arr[i + 1];
  }
  arr[arr.length - 1] = temp;
  console.log(arr);
}

question10()