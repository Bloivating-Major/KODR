function Question1(){
    // array left rotation by k elements
    // block swap algorithm left rotation by k element
    // 0 to k - 1 
    // k to length - 1
    // 0 to length - 1
    let arr = [1,2,3,4,5];
    let k = 2;
    k = k % arr.length;
    reverse(arr, 0 , k-1);
    reverse(arr, k , arr.length-1);
    reverse(arr, 0, arr.length-1);
    console.log(arr);
}

function Question2(){
    // array left rotation by k elements
    // block swap algorithm right rotation by k element
    // 0 to length - k - 1
    // length - k to length - 1
    // 0 to length - 1
    let arr = [1,2,3,4,5];
    let k = 2;
    k = k % arr.length;
    reverse(arr, 0 , (arr.length-k)-1);
    reverse(arr, arr.length-k, arr.length-1);
    reverse(arr, 0, arr.length-1);
    console.log(arr);
}



function Question3(){
    // Element 
    let arr = [1,2,3,4,5];
    let search = 5;
    let index = -1;
    for(let i = 0; i  < arr.length; i++){
        if(arr[i] == search) {
            index = i;
            break;
        }
    }
    if(index != -1) console.log("Search Element found at ",index);
    else console.log("Element not found");
}

// Question3(); // [3, 4, 5, 1, 2]

function reverse(arr, i, j){
    while(i < j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
}

function Question4(){
    let nums = [1,2,3,4,5,6,7,8,9,10];
    let target = 7;
    let start = 0, end = nums.length;
    let mid = start + (end - start) / 2;
    console.log(mid);
}

Question4(); // [4, 5, 6, 7, 8, 9, 10]