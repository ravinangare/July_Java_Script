// loops
// what is loop?
// loop is a programming construct that allows you to execute a block of code multiple times.
// types of loops
// 1. for loop -- for in, for of    
// 2. while loop
// 3. do-while loop

// let a = 1;
// console.log(a);
// a++;
// console.log(a);
// a=3;    
// console.log(a);
// for loop - used to execute a block of code a specific number of times.
// syntax
/*  
    for(initialization; condition; increment/decrement){    

        // block of code
    }
*/
// initialization - it is used to initialize a variable before the loop starts.
// condition - it is used to check the condition before each iteration of the loop.
// increment/decrement - it is used to update the variable after each iteration of the loop.
for(let i=1; i<=10; i++){
    console.log(i);
}


// While loop - used to execute a block of code as long as the condition is true.
// used when iterations depends upon a condition and we don't know the number of iterations in advance.
// syntax
/*
    while(condition){   
        // block of code
    }
*/
console.log("******************");

let j=1;
while(j<=10){
    console.log(j);
    j++;    
}

// do-while loop - used to execute a block of code at least once and then repeat the loop as long as the condition is true.
// syntax
/*
    do{
        // block of code
    }while(condition);
*/
console.log("******************");

let k=1;
do{
    console.log(k);
    k++;
}while(k<=10);

// for of loop - used to iterate over the elements of an iterable object like an array, string, etc.
// syntax
/*
    for(variable of iterable){
        // block of code
    }
*/
console.log("******************");

let arr = [1,2,3,4,5];  
for(let element of arr){
    console.log(element);
}

console.log("******************");
const fruits = ["apple", "banana", "cherry","date","Mango"];
for(let fruit of fruits){
    console.log(fruit);
}

fruits.forEach(function(fruit){
    if(fruit==="banana"){
        return;
    }
    console.log(fruit);
});

console.log("******************");
// traditional for loop - used to iterate over the elements of an array using index.
for(let i=0; i<fruits.length; i++){
    console.log(fruits[i]);
}

console.log("******************");
let str = "Hello World";
for(let c of str){
    console.log(c);
}

console.log("******************");
for(let i=0; i<str.length; i++){
    console.log(str[i]);
}

console.log("******************");

// for in loop - used to iterate over the properties of an object.
// syntax
/*  
    for(variable in object){
        // block of code
    }   
*/
console.log("******************");
const person = {    
    name: "John",
    age: 30,
    city: "New York"
};
for(let key in person){
    console.log(key, person[key]);
}

// loop control statements
// 1. break statement - used to exit the loop before it has completed all its iterations.
// 2. continue statement - used to skip the current iteration of the loop and move to the next iteration.

for(let i=1; i<=10; i++){
    if(i===5){
        break; // exit the loop when i is 5
    }
    console.log(i);
}

for(let i=1; i<=10; i++){
    if(i===5){
        continue; // skip the current iteration when i is 5
    }
    console.log(i);
}

for(let i=1; i<=100; i++){
    if(i%2===0){
        console.log(i); // print even numbers from 1 to 100
    }
}

for(let i=1; i<=100; i++){
    if(i%2!==0){
        console.log(i); // print odd numbers from 1 to 100
    }
}

const numbers = [10,50,57,67,99,34,54,23,45,67,89,90];

let largest = numbers[0];
for(let i=1; i<numbers.length; i++){
    if(numbers[i]>largest){
        largest = numbers[i];
    }
}
console.log("largest value",largest);

// reverse a string using for loop
let str1 = "Hello World";
let reversedStr = "";
for(let i=str1.length-1; i>=0; i--){
    reversedStr += str1[i]; // reversedStr = reversedStr + str1[i]  // dlroW olleH
}
console.log("Reversed string", reversedStr);

// what are loops in javascript?
// difference between for loop and while loop and do-while loop
// what is for in loop and for of loop
// foreach loop - used to iterate over the elements of an array and execute a callback function for each element.
// difference between for loop and forEach loop
// can break and continue be used in all loops?
// what is infinite loop and how to avoid it?
while(true){
    console.log("infinite loop");
    break; // to avoid infinite loop
}

let m=1;
while(m<=10){
    console.log(m);
    m++;
}

let n=1;
while(true){
    console.log(n);
    if(n===10){
        break; // to avoid infinite loop
    }   
    n++;
}
// What is nested for loop?
// A nested for loop is a loop inside another loop. The inner loop completes all its iterations for each iteration of the outer loop.
// syntax
/*
    for(initialization; condition; increment/decrement){
        // block of code
        for(initialization; condition; increment/decrement){
            // block of code
        }
    }
*/
// example
console.log("******************");  
for(let i=1; i<=3; i++){
    console.log("Outer loop iteration", i); 
    for(let j=1; j<=3; j++){
        console.log("Inner loop iteration", j);
    }   
}

// print 10 to 1 using for loop
console.log("******************");
for(let i=10; i>=1; i--){
    console.log(i);
}

// sum of 1 to 10 using for loop
console.log("******************");
let sum = 0;
for(let i=1; i<=10; i++){
    sum += i;   // sum = sum + i    // 55 // 1+2+3+4+5+6+7+8+9+10
}
console.log("Sum of 1 to 10:", sum);

// factorial of a number using for loop
// factorial of a number is the product of all positive integers less than or equal to that number.
// example: 5! = 5*4*3*2*1 = 120
console.log("******************");
let num = 5;
let factorial = 1;
for(let i=1; i<=num; i++){
    factorial *= i; // factorial = factorial * i   // 120
}
console.log("Factorial of", num, "is:", factorial);

// Reverse the number using for loop
console.log("******************");
let number = 12345;
let reversedNumber = 0;
for(let i=number; i>0; i=Math.floor(i/10)){
    reversedNumber = reversedNumber * 10 + i % 10;
}
console.log("Reversed number:", reversedNumber);

/*
*
**
***
****
*****

*/
for(let i=1; i<=5; i++){
    let str = "";
    for(let j=1; j<=i; j++){
        str += "*";
    }
    console.log(str);
}

/*
*****
****
***
**
*

*/

for(let i=5; i>=1; i--){
    let str = "";
    for(let j=1; j<=i; j++){
        str += "*";
    }
    console.log(str);
}

// what is prime number?
// A prime number is a natural number greater than 1 that cannot be formed by multiplying two smaller natural numbers. 
// In other words, a prime number is a number that has exactly two distinct positive divisors: 1 and itself.
// example: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

let primeNum = 43;
let isPrime = true;
for(let i=2; i<primeNum; i++){
    if(primeNum % i === 0){
        isPrime = false;
        break;
    }
}
if(isPrime){
    console.log(primeNum, "is a prime number");
} else {
    console.log(primeNum, "is not a prime number");
}

// fibonacci series using for loop
// The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1. 
// The sequence goes: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

let num1 = 10;
let a = 0, b = 1;
console.log(a, b);
for(let i = 2; i < num1; i++){
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
}

// swap two numbers without using a third variable
let x = 5, y = 10;
console.log("Before swapping: x =", x, "y =", y);
x = x + y;  // 15
y = x - y;  // 5
x = x - y;  // 10
console.log("After swapping: x =", x, "y =", y);

// Vowels Count in a string using for loop
let str2 = "Hello, World!";
let vowels = "aeiouAEIOU";
let count = 0;

for(let i = 0; i < str2.length; i++){
    if(vowels.includes(str2[i])){
        count++;
    }
}
console.log("Number of vowels in the string:", count);