function Question1(){
    // Leetcode 2042
    // String and Array Mixed Question
    let string = "hello world 5 x 5"
    let splitted  = string.split(' ');
    console.log(splitted);
    let arr = [];
    for(let i = 0; i < splitted.length; i++){
        if(Number((splitted[i]))){
            arr.push(Number(splitted[i]));
        }
    }
    console.log(arr);
    let isAssending = true;
    for(let i = 0; i < arr.length-1; i++){
        console.log(arr[i] , arr[i+1]);
        if(arr[i] >= arr[i + 1]) isAssending = false; 
    }
    console.log(isAssending);
}

function Question2(){
    // Leetcode 2000
    let word = "abcdefd";
    let ch = "d";
    let index = 0;
    let chElem = ch.charCodeAt();
    let arr = [];
    for(let i = 0; i < word.length; i++){
        arr.push(word[i]);
        if(word.charCodeAt(i) == chElem) {
            index = i;
            break;
        }
    }
    console.log(arr);
    let p1 = 0 , p2 = arr.length - 1;
    while(p1 < p2){
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1++;
        p2--;
    }
    console.log(arr);
}


function Question3(){
    let word = "abcdefd";
    let ch = "d";
    let index = 0;
    for(let i = 0; i < word.length; i++){
        if(word.charAt(i) == ch){
            index = i;
            break;
        }
    }
    let reverseSub = '';
    for(let i = index; i >=0; i--){
        reverseSub += word.charAt(i);
    }
    reverseSub = reverseSub + word.substring(index+1);
    console.log(reverseSub);
}

function Question4(){
    let string = '1 box has 3 blue 4 red 14 green and 12 yellow marbles';
    let arr = string.split(" ");
    let temp = 0;
    let isAssending = true;
    for(let i  = 0; i < arr.length; i++){
        let word = arr[i]; 
        if(Number(word)){
            if(Number(word) > temp) temp = Number(word);
            else {
                isAssending = false;
                break;
            }           
        }
    }
    console.log(isAssending);
}
