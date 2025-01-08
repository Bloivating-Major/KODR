function Question1() {
  // take input from user to create that size of array
  let size = 5;
  let arr = new Array(size);

  for (let i = 0; i < size; i++) {
    arr[i] = Math.floor(Math.random() * 100);
  }
  // print the array
  console.log("Array: ", arr);
}
// Question1();
function Question2() {
  // print sum of all array elements
  let arr = [10, 20, 30, 40, 50];
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
}

// Question2();

function Question3() {
  // find the maximum element in the array
  let arr = [10, 20, 30, 40, 50];
  let max = arr[0];
  for(let i = 1; i <arr.length; i++){
    if(arr[i] > arr[0]) max = arr[i];
  }
  console.log("Maximum element: ", max);
}

// Question3();

function Question4() {
    arr = [10, 20, 30, 40, 50];
    let max = arr[0] > arr[1] ? arr[0] : arr[1];
    let max2 = arr[0] < arr[1] ? arr[0] : arr[1];

    for(let i = 2; i < arr.length; i++){
        if(arr[i] > max) {
            max2 = max;
            max = arr[i];
        }
        if(arr[i] > max && arr[i] > max2) max2 = arr[i];
    }

    console.log("1st Max element is ", max);
    console.log("2nd Max element is ", max2);
}

Question4();
