/*

Overview
In this activity, you will receive three short JavaScript programs,
each containing a different type of error (syntax, runtime, and logic)
along with a brief explanation of what the program is supposed to do.
Your task is to identify the error, correct it, and verify the fix.

Instructions
Debugging Steps:
  - Identify the error type (syntax, runtime, or logic).
  - Use Debugging Techniques such as reading error messages, using console.log(), or testing in small steps.
  - Propose a Fix that addresses the error.
  - Verify the Solution by running the code again to ensure the program works as intended.

Reflection:
Think about which debugging methods you found most useful and how you might apply them in future projects.

*/

// Programs and Solutions

// Program A
// Description:
// This program is intended to display a simple prompt in the console but fails to run.

console.log("Welcome to the bootcamp

// What’s Wrong? Syntax Error due to a missing closing quotation mark and a semicolon
//fix: console.log("Welcome to the bootcamp!");
//output: Welcome to the botcamp!


// Program B
// Description:
// This code attempts to multiply each number in an array by 2 and display the results. However, it crashes at runtime.

let numbers = [2, 4, "eight"];
for (let i = 0; i < numbers.length; i++) {
  let doubled = numbers[i] * 2;
  console.log(doubled);
}

// What’s Wrong? Runntime Error due to an invalid operation. The error occurs when trying to multiply a string by a number.
//I read the code to locate the error
//I used console.log to inspect the elemt's type
//Fix: The correct code is
let numbers = [2, 4, 8]; //changed "eight" to 8

numbers.forEach(number => {
const doubled = number * 2;
console.log(doubled);
});
// output: 
//4
//8
//16

// Program C (Logic Error)
// Description:
// This snippet of code is supposed to check if a given number is prime (i.e., divisible only by 1 and itself). However, it incorrectly 
// //marks some numbers as prime or not prime.

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return true;  // Supposed to indicate num is NOT prime
    }
  }
  return false; // Supposed to indicate num IS prime
}

console.log(isPrime(7)); // Expected true but gets false

// What’s Wrong? Logic Error - It returns true when the number is not prime, but should return false. The conditions of returning true and false are
//swapped.
//I re-red the function logic and found that the true and false should be swapped
//Fix/ The correct code is: 
function isPrime(num) {
if (num < 2) return false;
for (let i = 2; i < num; i++) {
if (num % i === 0) {
return false;
}
}
return true;
}

console.log(isPrime(7));
console.log(isPrime(4));
//output: true
//output: false

//REFLECTION - I believe that a Syntax error is the techniche I will use the most. When someone is trying to work quick, a typo,
//or just forgetting to close a quotation mark will generate a syntax error. So the application of this debbuging techniche by reading
//the code I believe is the one that will have the most application.