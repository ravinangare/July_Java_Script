// what is variable?
// A variable is a named storage location in memory that holds a value.
// variable declaration
// java script provides three ways to declare a variable: var, let, and const.
// var: The var keyword is used to declare a variable in JavaScript. It has function scope and can be re-declared and updated within its scope.
// let: The let keyword is used to declare a variable in JavaScript. It has block scope and can be updated but not re-declared within its scope.
// const: The const keyword is used to declare a variable in JavaScript. It has block scope and cannot be updated or re-declared within its scope.

// var name = "Ravi"
// var name = "Ravi Nangare" // redeclaration is allowed with var
// console.log(name)

// function scope
// redeclaration 
// reassignment 
// Hoisting: Variables declared with var are hoisted to the top of their scope, meaning they can be accessed before they are declared. However, they will be undefined until the line of code where they are assigned a value is executed.
function printName() {  // function declaration
    var name = "Ravi";
    var name = "Ravi Nangare" // redeclaration is allowed with var
    name = "Ravi Basaveshwar Nangare" // updating the value of name variable
    console.log(name)
}
 
//console.log(name) // ReferenceError: name is not defined
printName() // calling the function to print the name

console.log(y); // ReferenceError: y is not defined ---> undefined
var y = 10;
console.log(y); // 10

// let keyword - 2015 (ES6) EcmaScript 6
// let name = "Ravi"
 //let name = "Ravi Nangare" // SyntaxError: Identifier 'name' has already been declared
// name = "Ravi Nangare"  // updating the value of name variable
// console.log(name)

 // block scope
 if (true) {
    let name = "Nishant Bokade" // block scope variable
    console.log(name) // Nishant Bokade
 }
 //console.log(name) // ReferenceError: name is not defined

//console.log(z); // ReferenceError: Cannot access 'z' before initialization
let z = 20;
console.log(z); // 20
// Hoisting: Variables declared with let are hoisted to the top of their block scope, but they are not initialized until the line of code where they are assigned a value is executed. This means that if you try to access a let variable before it is declared, you will get a ReferenceError.
// TDZ (Temporal Dead Zone): The TDZ is the time between the start of the block and the point where the variable is declared. During this time, the variable cannot be accessed, and any attempt to do so will result in a ReferenceError.
let k;  // undefined
console.log(k); // undefined

// difference between var and let
// 1. Scope: var has function scope, while let has block scope.
// 2. Redeclaration: var can be redeclared within its scope, while let cannot be redeclared within its scope.
// 3. Hoisting: var is hoisted to the top of its scope and initialized with undefined, while let is hoisted to the top of its block scope but not initialized until the line of code where it is assigned a value is executed.
// 4. TDZ: let has a Temporal Dead Zone (TDZ) that prevents access to the variable before it is declared, while var does not have a TDZ.
// 5. var is legacy and should be avoided in modern JavaScript code, while let is the preferred way to declare variables in modern JavaScript code.

//3. const keyword - 2015 (ES6) EcmaScript 6
const PI = 3.14159; // const variables must be initialized at the time of declaration
// PI = 3.14; // TypeError: Assignment to constant variable.
console.log(PI); // 3.14159
const city = "Pune"; // const variables must be initialized at the time of declaration
// city = "Mumbai"; // TypeError: Assignment to constant variable.
console.log(city); // Pune
{
    const country = "India"; // const variables have block scope
    console.log(country); // India
}
// console.log(country); // ReferenceError: country is not defined

const student ={
    name: "Ravi",
    age: 25,
    city: "Pune",
    country: "India"
}
student.name = "Ravi Nangare"; // updating the value of name property
console.log(student); // { name: "Ravi", age: 25, city: "Pune", country: "India" }
// student = {
//     age: 26,
//     city: "Mumbai",
//     country: "India"
// }
// console.log(student); // TypeError: Assignment to constant variable.
//console.log(m); 
const m = 30; // const variables must be initialized at the time of declaration
console.log(m); // 30

// difference between let and const and var
// 1. Scope: var has function scope, while let and const have block scope.
// 2. Redeclaration: var can be redeclared within its scope, while let and const cannot be redeclared within their scope.
// 3. Hoisting: var is hoisted to the top of its scope and initialized with undefined, while let and const are hoisted to the top of their block scope but not initialized until the line of code where they are assigned a value is executed.  
// 4. TDZ: let and const have a Temporal Dead Zone (TDZ) that prevents access to the variable before it is declared, while var does not have a TDZ.
// 5. Reassignment: var and let can be reassigned, while const cannot be reassigned. However, the properties of an object declared with const can be updated.

// Rules for naming variables in JavaScript:
// 1. Variable names can contain letters, digits, underscores, and dollar signs.
// 2. Variable names must begin with a letter, underscore, or dollar sign.
// 3. Variable names are case-sensitive (e.g., myVar and myvar are different variables).
// 4. Reserved words (keywords) cannot be used as variable names (e.g., var, let, const, function, etc.).

// valid variable names
var myVar = 10;
var _myVar = 20;
var $myVar = 30;
var my_var = 40;
var myVar2 = 50;
console.log(myVar, _myVar, $myVar, my_var, myVar2); // 10 20 30 40 50

// invalid variable names
// var 2myVar = 10; // SyntaxError: Invalid or unexpected token
// var my-Var = 20; // SyntaxError: Invalid or unexpected token
// var my Var = 30; // SyntaxError: Invalid or unexpected token
// let var = 40; // SyntaxError: Unexpected token 'var'

var firstName = "Ravi"; // camelCase
var last_name = "Nangare"; // snake_case
var FirstName = "Ravi"; // PascalCase   

