// Create a counter using Closure

// This is normal function
function createCounter() {

    let count = 0;

    return {
        // we are returning decrement function
        increment() {
            count++;
            console.log(`Current count: ${count}`);
        },
        // we are returning decrement function
        decrement() {
            count--;
            console.log(`Current count: ${count}`);
        },
        // we are returning reset function
        reset() {
            count = 0;
            console.log(`Count reset to 0`);
        }
    };
}

const counter = createCounter();

counter.increment(); // Current count: 1

counter.decrement(); // Current count: 0

const newCounter = createCounter();

newCounter.increment()

// Create a function createAdder which takes an argument and return a function that adds that number to any new input

function createAdder(val){
    return{
        newAdder(newVal){
            console.log(`New Value ${val+newVal}`);
        }
    }
}

const adder = createAdder(1);
adder.newAdder(2);

// Greeter

function Greet(greet){
    // console.log(`${greet}`);
    return{
        greetByName(greet, name){
            console.log(`${greet} ${name}` );
        }
    }
}

const greet = Greet("Hello");

greet.greetByName("Sambhav")

// Create such a closure that when we call it 3 times we will get 1,2,3 and after 4th time it will give rate limit

function rateLimit(){
    let count = 0;
    return function(){
        count++;
        if(count > 3){
            console.log("Rate limit exceeded")
        }else{
            console.log(`Count ${count}`);
        }
    }
}

const rate = rateLimit();
rate(); // Count 1
rate(); // Count 2
rate(); // Count 3
rate(); // Rate limit exceeded

// Create a toggle state function using closure
function toggleState(){
    let state = false;
    return function(){
        state = !state;
        if(state){
            console.log(`ON`);
        }else {
            console.log(`OFF`);
        }
    }
}

let toggle = toggleState();
toggle();

// Create a function that will accept password and when i will call it again it will take pass if pass correct the login else wrong pass
function login(password){
    return function(pass){
        pass === password ? console.log(`Login Success`) : console.log(`Wrong Password`);
    }
}

const pass = login("sambhav");
pass("sambhav") // Login Success    
pass("wrong") // Wrong Password

// Create a closure function you can call it 1 time and now from 3 seconds after that how many times you call it it will not work after 3 seconds it will work again
function rateLimitAfter3Sec(){
    let check = true;
    return function(){
        if(!check){
            console.log("Rate Limit Exceeded")
        }else{
            console.log(`Hello Bhai`);
            check = false;
            setTimeout(() => {
               check = true;
            }, 3000)
        }
    }
}

let afterThree = rateLimitAfter3Sec();
afterThree(); // Count 1

// create a function that stores argument that takes a callback and when we will call the function inside it 3 times it will return the data given in first time when we created the function
function callBackFun(callback){
    let args = [];
    return function(val){
        args.push(val);
        if(args.length === 3){
            callback(args);
            args = []; 
        }
    }
}

function test(val) {
    console.log(`Val is : ${val}`);
}

const store = callBackFun(test);
store(1); 
store(2); 
store(3); 



