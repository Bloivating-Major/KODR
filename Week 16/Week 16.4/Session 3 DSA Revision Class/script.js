    // Selection Sort


    // 7    10  12  6   1
    // We will check from 1st element with full array elements whether we have any minimum element than our first element

    // 7 will be compared with 10 12 6 1 
    // and minimum is 1 so we will swap it
    // also we are assuming that our current element is minimum

    let arr = [7, 10 , 12, 6, 1];

    console.log(arr);

    function insertionSort(arr){
        for(let i = 1; i < arr.length; i++){
            let current = arr[i]; // 10
            let previous = i - 1; // 0;
            while(previous >= 0 && arr[previous] > current) {
                    // 7 > 10
                    arr[previous+1] = arr[previous];
                    previous--;
            }
            arr[previous+1] = current;
        }
    }

    function selectionSort(arr){
        for(let i = 0; i < arr.length; i++){
            let min = i;
            for(let j = i + 1; j < arr.length; j++){
                if(arr[j] < arr[min]) min = j;
            }
            if(i !== min){
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
            }
        }
        return arr;
    }

    // console.log(selectionSort(arr));
    console.log(insertionSort(arr));