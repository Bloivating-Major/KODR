function binarySearch(arr, searchElem) {
  let start = 0, end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] == searchElem) return mid;
    else if (arr[mid] > searchElem) end = mid - 1;
    else start = mid + 1;
  }

  return -1;
}

let arr = [5, 8, 10, 12, 16, 17, 35, 40, 55, 75];
let elem = Number(prompt("Enter Search Element :  "));

let index = -1;
index = binarySearch(arr, elem);
if (index == -1) console.log("Not Found");
else console.log("Found at " + index);
