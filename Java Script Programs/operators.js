// operators - operators are special symbol used to perform operations on variables or values.
let a = 10; // assignment operator.

// Arithmetic operator.
/*
    Addition (+)
    substraction (-)
    Multiplication (*)
    division (/)
    Modulos (%)
    Exponential (**)
    Increment (++)
    decrement (--)

*/

a++;
console.log(a);
a--;
console.log(a);

let b = 20;
// Addition
let sum = a + b;
console.log(sum)
let sum1 = 10 + 40;
console.log(sum1)

// substraction
let sub = a - b;
console.log(sub)

// Multiplication
let mul = a * b;
console.log(mul)
console.log(a * b)

// division 
let div = b / a;
console.log(div)

// Modulos
let mod = b % a;
let mod1 = 23 % 5;
console.log(mod)
console.log(mod1)

// Expo
console.log(2**5)

// Increment
// post increment
// pre increment
console.log(a++)     // post increment
console.log(a)
console.log(++a) // pre increment

console.log(a--)   // post decrement
console.log(a)
console.log(--a)  // pre decrement

// Assigment operator
/*
        = Assign operator
        += : a += 5 ====> a = a + 5

*/

a += 5;
console.log(a)


// logical operators.
// AND Operator (&&)
// OR Operator  (||)
// Not operator. (!)

// AND Operator (&&) - both input conditions should be true then the output should true.
/*
inputs                  output
A       B                   C
true    true                true
true    false               false
false   true                false
false   false               false

*/

let age = 17;
let hadID = true;

console.log(age<18 && hadID)
console.log(age>18 && hadID)
console.log(hadID && age>18)
console.log(age<18 && !hadID)

// OR Operator (||) - either input condition should be true then the output should true.
/*
inputs                  output
A       B                   C
true    true                true
true    false               true
false   true                true
false   false               false

*/

console.log(age<18 || hadID)
console.log(age>18 || hadID)
console.log(hadID || age>18)
console.log(age>18 || !hadID)

// Not operator. (!) - opposite the result.(if result is true ----> false)
console.log(hadID)
console.log(!hadID)

// Ternary Operator.
// Syntax
// condition ? value_if_true:value_if_false

const canVote = (age>=18) ? "Eligible for Voting":"Not Eligible for Voting"
console.log(canVote)

let number = 7;
let result = (number % 2 == 0)? "Even":"odd"
console.log(result)

let score = 95;
let grade = (score>=90 && score<=100)? "A+" :(score>=80)? "A" :(score>=70)? "B+" :(score>=60)? "B" : "C"
console.log(grade)

// what is operators?
// how many types of operators?
// what are arithmetic operators?
// difference between post increment(a++) and pre increment(++a)
// difference between post decrement(a--) and pre decrement(--a)
// what is assignement operator?
// what is comparision operators?
// what is diff between == and ===
// what is diff between != and !==
console.log(10 != "10")
console.log(10 !== "10")
// what is logical operators?
// explain AND
// explain OR
// Explain NOT
// what is ternary operator
// what is diff bet && and ||
// what is typeOf operator. -- return datatype.
console.log(typeof(age))
console.log(typeof("10"))

