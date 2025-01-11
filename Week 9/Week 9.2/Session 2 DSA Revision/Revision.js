function Question1(){
    // Rotating Array Elements
    // Left Rotation
    let arr = [1,2,3,4,5];
    let temp = arr[0];
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr[arr.length-1] = temp;
    console.log(arr);
}

function Question2(){
    // Rotating Array Elements
    // Right Rotation
    let arr = [1,2,3,4,5];
    let temp = arr[arr.length-1];
    for(let i = arr.length-1; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = temp;
    console.log(arr);
}

Question2();