// Stable and Unstable Algorithms
// Insertion Sort
let arr = [3,2,4,1,5,9];
// InsertionSort(arr);
// SelectionSort(arr);
console.log(arr);

function BubbleSort(arr){
    for (i = 0; i < n - 1; i++){
        swapped = false;
        for (j = 0; j < n - i - 1; j++){
            if (arr[j] > arr[j + 1]) 
            {
                // Swap arr[j] and arr[j+1]
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                swapped = true;
            }
        }

        // IF no two elements were 
        // swapped by inner loop, then break
        if (swapped == false)
        break;
    }
}


function SelectionSort(arr) {
    for(let i = 0; i <arr.length-1; i++){
        let minIndex = i;
        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
}

function InsertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
    }
}

