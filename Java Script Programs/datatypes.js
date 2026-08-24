// Data types in JavaScript:
// 1. Primitive data types: These are the basic data types in JavaScript and include:
// what is primitive data type?
// Primitive data types are the most basic data types in JavaScript. They are immutable, meaning their values cannot be changed once they are created. The primitive data types in JavaScript include:
// primitive data types store single values and are not objects. They are passed by value, meaning that when you assign a primitive value to a variable or pass it as an argument to a function, a copy of the value is created. The primitive data types in JavaScript include:
// - Number: Represents numeric values (e.g., 42, 3.14).    
// - String: Represents sequences of characters (e.g., "Hello, World!").
// - Boolean: Represents true or false values (e.g., true, false).
// - Undefined: Represents a variable that has been declared but has not been assigned a value.
// - Null: Represents the intentional absence of any object value.
// - Symbol: Represents a unique and immutable value that can be used as an identifier for object properties (introduced in ES6).
// - BigInt: Represents integers with arbitrary precision (introduced in ES2020).

// 2. Non-primitive data types: These are more complex data types in JavaScript and include:
// what is non-primitive data type?
// Non-primitive data types are more complex data types in JavaScript that can hold multiple values and are mutable, meaning their values can be changed after they are created. The non-primitive data types in JavaScript include:
// - Object: Represents a collection of key-value pairs (e.g., { name: "Ravi", age: 25 }).
// - Array: Represents an ordered list of values (e.g., [1, 2, 3, 4, 5]).
// - Function: Represents a block of reusable code that can be executed when called (e.g., function greet() { console.log("Hello!"); }).    
// - Date: Represents a specific point in time (e.g., new Date()).
// - RegExp: Represents a regular expression pattern used for pattern matching in strings (e.g., /ab+c/).
// - Map: Represents a collection of key-value pairs where keys can be of any data type (introduced in ES6).
// - Set: Represents a collection of unique values (introduced in ES6).

//1. Number - used to represent numeric values, including integers and floating-point numbers. JavaScript uses the IEEE 754 standard for representing numbers, which means that all numbers are stored as 64-bit floating-point values. This can lead to some unexpected behavior when performing arithmetic operations with very large or very small numbers.
let num1 = 10; // integer   
let num2 = 3.14; // floating-point number
console.log(num1); // 10
console.log(num2);  // 3.14
console.log(typeof(num1));
console.log(typeof(num2));      
let num3 = num1 + num2;
console.log(num3);
console.log(typeof(num3))

// BigInt: Represents integers with arbitrary precision (introduced in ES2020).
let bigNumber = 98765678987667898767890987678987678987n;
console.log(typeof(bigNumber))
let num4 = 9007199254740991n + 2n;
console.log(num4)


// String: Represents sequences of characters (e.g., "Hello, World!").
let name = "Utkarshaa";
let city = 'pune';
let message = `welcome to ${name} academy ${city}`;
let message1 = 'welcome to ' +name+ ' academy ' +city+'';
name[0] ="u";
console.log(name)
console.log(typeof(name))
console.log(typeof(city))
console.log(typeof(message))
console.log(message)
console.log(message1)

//Boolean: Represents true or false values (e.g., true or false)

let age = 17;
console.log(age>=18)

let isAdmin = false;
let isLoggedIn = true;
console.log(isAdmin)
console.log(isLoggedIn)
console.log(typeof(isAdmin))

//  Undefined: Represents a variable that has been declared but has not been assigned a value.
let name1;
console.log(name1);
console.log(typeof(name1))

// - Null: Represents the intentional absence of any object value.
let user = null;
console.log(user)
console.log(typeof(user))

var user1;
console.log(user1)
console.log(typeof(user1))

// - Symbol: Represents a unique and immutable value that can be used as an identifier for object properties (introduced in ES6).
let id1 = Symbol("12345676543");

let id2 = Symbol("12345676543");

console.log(id1 == id2)
console.log(typeof(id1))
console.log(id1)

// what is primitive data types?
// how many primitive data types in java script?
// what is diff bet primitive and non primitive?
// what is string?
// what is number?
// what is typeof operator?
// are primitive data types are mutable?
// what is diff between null & undefined
// what is diff bet == and === (strict equal to).

// Non Primitive Data Types
// Object: Represents a collection of key-value pairs (e.g., { name: "Ravi", age: 25 }).
const emp = {
    name : "Utkarshaa",
    age : 25,
    city : 'Pune',
    salary : 50000
}
console.log(emp)
console.log(emp.name)
console.log(emp["salary"])

emp.name = "Ravi"
console.log(emp)
emp.designation ="QA Engineer";
console.log(emp)

delete emp.city;
console.log(emp)


// - Array: Represents an ordered list of values (e.g., [1, 2, 3, 4, 5]).
// what is an array - An array store multiple values in a single variable.
let numbers = [10,20,30,40,50,true,false,"first","second"]
console.log(numbers)
console.log(numbers[0])
numbers.push("Third",60);
console.log(numbers)
numbers.pop()
console.log(numbers)
console.log(numbers.length)

// - Function: Represents a block of reusable code that can be executed when called (e.g., function greet() { console.log("Hello!"); }).    
// functions are also objects in java script.
function greet(name){
    console.log("Hello " + name)
}
greet("Utkarshaa")
greet("Nishant")

// function square(num){
//     console.log(num * num)
// }
// square(5);
// square(67)
// console.log(typeof(square))

// function stored in variable.
const square = function(num){   // unnamed function
    return num * num ;
}
console.log(square(6))
console.log(typeof(square))

// - Date: Represents a specific point in time (e.g., new Date()).
// date objects represents date and time.
let today = new Date();
console.log(today)
console.log(today.getMonth())
console.log(today.getFullYear())
console.log(today.getUTCFullYear())
console.log(today.getDate())
console.log(today.getTime())
console.log(today.setDate(26));
console.log(today.setDate(30));
console.log(today.getDay());


// - RegExp: Represents a regular expression pattern used for pattern matching in strings (e.g., /ab+c/).

let pattern = /hello/i;
console.log(pattern.test("HelloWorld"));

// - Map: Represents a collection of key-value pairs where keys can be of any data type (introduced in ES6).
let student = new Map();
student.set("name","Nishant");
student.set("age",28)
student.set("city","pune")
console.log(student);
console.log(student.get("age"))
console.log(student.get("name"))
console.log(student.size)

const obj = {}
obj[1] = "one"
obj[true] = "yes"
console.log(obj)

const map = new Map();
map.set(1,"one")
map.set(true,"yes")
console.log(map)

// - Set: Represents a collection of unique values (introduced in ES6).
let set = new Set();
set.add(10)
set.add(20)
set.add(30)
set.add(10)
set.add(40)
set.add(20)
console.log(set)
// what is non-primitive data types?
// how many non primitive data types in java script?
// why non primitive data types called reference types?
// what is obejct?
// what is array?
// waht is function?
// what is diff bet object & map
// what is diff bet array & set
// what is mutable?

let a = 10;
let b = "10";

console.log(a==b)
console.log(a===b)