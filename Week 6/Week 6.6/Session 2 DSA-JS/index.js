function question1() {
  let arr = []; // creation of a new array

  let size = Number(prompt("Enter a number : ")); // Taking input from user as a size of array.

  // Filling the array taking input from a user.
  for (let i = 0; i < size; i++) {
    arr[i] = prompt("Enter a number : "); // taking input from user in array.
  }

  console.log("Array: ", arr); // printing the array
}

function question2() {
  let arr = [10, 20, 30, 40, 50]; // creation of a new array
  let sum = 0; // creating a sum variable

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log("Sum of Array is :  ", sum); // printing the sum
}

function question3() {
  let arr = [10, 20, 30, 40, 50]; // creation of a new array
  let max = arr[0]; // creating a max variable

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) max = arr[i]; // checking for the max variable
  }

  console.log("Max number in Array is :  ", max); // printing the max
}


function question4() {
    let arr = [10, 20, 30, 40, 50]; // creation of a new array
    let max = Math.max(arr[0], arr[1]); // creating a max variable
    let secondMax = Math.min(arr[0], arr[1]); // creating a min variable
  
    for (let i = 2; i < arr.length; i++) {
      if (arr[i] > max) max = arr[i]; // checking for the max variable
      else if(arr[i] > secondMax &&  arr[i] < max ) secondMax = arr[i]; // checking for the second max variable
    }
  
    console.log("Max number in Array is :  ", max); // printing the max
    console.log("Max 2 number in Array is :  ", secondMax ); // printing the max
  }
  
function question5() {
    let arr = [1,1,3,5,6,7]; // creation of a new array
    let isSorted = true; // check if array is sorted or not

    for(let i = 0; i < arr.length-1; i++){
        if(arr[i] > arr[i+1]) {
            isSorted = false;
            break;
        }
    }
    if(isSorted) console.log("Sorted");
    else console.log("Not Sorted");
}

function question6() {
    let arr = [10, 20, 30, 40, 50]; // creation of a new array
    let temp = arr[0]; // left shift of array

    for(let i =0; i < arr.length -1; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;

    console.log(arr);
  }

  function question7() {
    let arr = [10, 20, 30, 40, 50]; // creation of a new array
    let temp = arr[arr.length-1]; // right shift of array    
    for(let i = arr.length -1; i > 0; i--){ // starting the index from backside of the array.
        arr[i] = arr[i -1]; 
    }
    arr[0] = temp; 
    console.log(arr);
  }
