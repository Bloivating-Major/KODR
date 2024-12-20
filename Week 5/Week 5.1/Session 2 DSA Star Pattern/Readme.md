Below are JavaScript solutions to your questions using simple and brute-force methods. 
### Solutions

#### 1. **Print the multiplication table**
```javascript
function printTable(number) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${number} * ${i} = ${number * i}`);
    }
}
printTable(5);
```

#### 2. **Movie Rating Program**
```javascript
function movieRating(rating) {
    if (rating >= 8) {
        console.log("Excellent");
    } else if (rating >= 5) {
        console.log("Good");
    } else {
        console.log("Poor");
    }
}
movieRating(7);
```

#### 3. **Check if an ISBN Number**
```javascript
function isISBN(number) {
    let sum = 0, multiplier = 10;
    for (const digit of String(number)) {
        sum += multiplier * Number(digit);
        multiplier--;
    }
    console.log(sum % 11 === 0 ? "Valid ISBN" : "Invalid ISBN");
}
isISBN(9780306406157);
```

#### 4. **HCF/GCD**
```javascript
function findHCF(a, b) {
    while (b !== 0) {
        [a, b] = [b, a % b];
    }
    return a;
}
console.log(findHCF(12, 15));
```

#### 5. **Harshad Number**
```javascript
function isHarshad(num) {
    const sum = String(num).split('').reduce((a, b) => a + Number(b), 0);
    console.log(num % sum === 0 ? "Harshad Number" : "Not a Harshad Number");
}
isHarshad(18);
```

#### 6. **Perfect Square**
```javascript
function isPerfectSquare(num) {
    const sqrt = Math.sqrt(num);
    console.log(Number.isInteger(sqrt) ? "Perfect Square" : "Not a Perfect Square");
}
isPerfectSquare(25);
```

#### 7. **Abundant Number**
```javascript
function isAbundant(num) {
    let sum = 0;
    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) sum += i;
    }
    console.log(sum > num ? "Abundant Number" : "Not an Abundant Number");
}
isAbundant(12);
```

#### 8. **Fibonacci Series**
```javascript
function fibonacciSeries(n) {
    let [a, b] = [0, 1];
    console.log(a, b);
    for (let i = 2; i < n; i++) {
        [a, b] = [b, a + b];
        console.log(b);
    }
}
fibonacciSeries(10);
```

#### 9. **Numbers with Exactly X Divisors**
```javascript
function findNumbersWithXDivisors(n, x) {
    for (let num = 1; num <= n; num++) {
        let divisors = 0;
        for (let i = 1; i <= num; i++) {
            if (num % i === 0) divisors++;
        }
        if (divisors === x) console.log(num);
    }
}
findNumbersWithXDivisors(50, 4);
```

#### 10. **Prime Factors**
```javascript
function primeFactors(num) {
    let factors = [];
    for (let i = 2; i <= num; i++) {
        while (num % i === 0) {
            factors.push(i);
            num /= i;
        }
    }
    console.log(factors);
}
primeFactors(60);
```

#### 11. **Area Calculation**
```javascript
function calculateArea(shape, ...args) {
    switch (shape) {
        case 'circle':
            return Math.PI * args[0] ** 2;
        case 'rectangle':
            return args[0] * args[1];
        case 'triangle':
            return 0.5 * args[0] * args[1];
    }
}
console.log(calculateArea('circle', 5));
console.log(calculateArea('rectangle', 10, 20));
console.log(calculateArea('triangle', 10, 15));
```

#### 12. **Neon Number**
```javascript
function isNeonNumber(num) {
    const square = num ** 2;
    const sumOfDigits = String(square).split('').reduce((a, b) => a + Number(b), 0);
    console.log(sumOfDigits === num ? "Neon Number" : "Not a Neon Number");
}
isNeonNumber(9);
```

#### 13. **Sum of Fibonacci Numbers at Even Indexes**
```javascript
function sumEvenIndexedFib(n) {
    let [a, b, sum] = [0, 1, 0];
    for (let i = 0; i < 2 * n; i++) {
        if (i % 2 === 0) sum += a;
        [a, b] = [b, a + b];
    }
    console.log(sum);
}
sumEvenIndexedFib(4);
```

---

### Creative README
#### Title
**✨ Brute-Force Programming Challenges in JavaScript ✨**

#### Introduction
This repository contains JavaScript solutions to common programming problems, implemented in a simple and beginner-friendly way using brute-force techniques.

#### Table of Contents
1. Multiplication Table
2. Movie Rating System
3. ISBN Validator
4. HCF/GCD Finder
5. Harshad Number Checker
6. Perfect Square Validator
7. Abundant Number Detector
8. Fibonacci Series Generator
9. Numbers with X Divisors Finder
10. Prime Factorization
11. Area Calculator (Circle, Rectangle, Triangle)
12. Neon Number Checker
13. Sum of Even-Indexed Fibonacci Numbers

#### Features
- **Beginner-Friendly**: Easy-to-understand brute-force solutions.
- **Interactive Examples**: Clear and concise code for each problem.
- **Well-Documented**: Each problem includes an explanation in the code comments.


#### Contributing
Feel free to submit issues or contribute to this repository by creating pull requests.

#### License
This project is open-source under the MIT License.