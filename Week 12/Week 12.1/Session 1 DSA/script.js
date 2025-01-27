function Question1(){
    // Sieve of Erasthsthenes
    let num = 30;

    checkPrime(num)

    function checkPrime(num){
        let arr = new Array(num+1).fill(true);
        for(let i = 2; i <=Math.floor(Math.sqrt(num)); i++){
            if(arr[i]==true){
                for(let j=i*i; j <= num; j = j + i){
                    arr[j] = false;
                }

            }
        }
        for(let i=2; i < arr.length; i++){
            if(arr[i] == true) console.log(i + " ");
        }
    }
}

Question1();