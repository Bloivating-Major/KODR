function mergeSort(arr) {
    if (arr.length <= 1) return arr; // Base case

    let mid = Math.floor(arr.length / 2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    return merge(left, right);
}

function merge(left, right) {
    let sortedArr = [], i = 0, j = 0;

    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            sortedArr.push(left[i]);
            i++;
        } else {
            sortedArr.push(right[j]);
            j++;
        }
    }

    return [...sortedArr, ...left.slice(i), ...right.slice(j)];
}

let arr = [5, 3, 8, 4, 2, 7, 1, 6];
console.log(mergeSort(arr));