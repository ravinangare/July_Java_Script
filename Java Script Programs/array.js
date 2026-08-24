// what is an array in java script?
// an array is a data structure that can hold multiple values at once. 
// it is a collection of elements, each identified by an index or key.
// arrays are used to store multiple values in a single variable.
// arrays can hold values of different data types like numbers, strings, objects, etc.
// arrays are zero-indexed, which means the first element has an index of 0, the second element has an index of 1, and so on.

// how many ways to create an array in javascript?
// there are several ways to create an array in javascript. some of the most common ways are:
// 1. using the array literal syntax: let arr = [];
// 2. using the Array constructor: let arr = new Array();
// 3. using the Array.of() method: let arr = Array.of(1, 2, 3);
// 4. using the Array.from() method: let arr = Array.from([1, 2, 3]);   

// Array Literal Syntax
let arr1 = [1, 2, 3, 4, 5, true, false, "hello", {name: "John", age: 30}, [1, 2, 3]];
console.log(arr1);
console.log(arr1[0]); // 1
console.log(arr1[7]); // "hello"
let a = 10;
console.log(Array.isArray(arr1)); // true
console.log(Array.isArray(a)); // false

// Array constructor
let arr2 = new Array();
console.log(arr2); // []
console.log(Array.isArray(arr2)); // true

let arr3 = new Array(5);
console.log(arr3); // [empty × 5]
console.log(Array.isArray(arr3)); // true

let arr4 = new Array(1, 2, 3);
console.log(arr4); // [1, 2, 3]
console.log(Array.isArray(arr4)); // true
let arr5 = new Array("hello", "world",12,23,34,45,true,false);
console.log(arr5); // ["hello", "world", 12, 23, 34, 45, true, false]
console.log(arr5[0]); // "hello"

// Array.of() method
let arr6 = Array.of(1, 2, 3);
console.log(arr6); // [1, 2, 3]
console.log(Array.isArray(arr6)); // true

// Array.from() method
let arr7 = Array.from([1, 2, 3,"hello",true,false]);
console.log(arr7);  // [1, 2, 3, "hello", true, false]
console.log(Array.isArray(arr7)); // true   

// Array methods
// 1. length - returns the number of elements in an array.
let arr8 = [1, 2, 3, 4, 5,"hello",true,false];
console.log(arr8.length); // 8  

// 2. push() - adds one or more elements to the end of an array and returns the new length of the array.
arr8.push(6,"apple","mango");
console.log(arr8); // [1, 2, 3, 4, 5, "hello", true, false, 6, "apple", "mango"]

// 3. pop() - removes the last element from an array and returns that element.  
let lastElement = arr8.pop();
console.log(lastElement);   
console.log(arr8)

// 4. unshift(ele1,ele2) - add the elements to the begining of an array.
arr8.unshift(100,200,300);
console.log(arr8)

// what is diff bet push and unshift?

// 5. shift() - removes the first element of an array.
const firstelement = arr8.shift()
console.log(firstelement)
console.log(arr8)

// what is diff bet pop and shift?

// 6. splice(startIndex,numberofElementstoDelete,ele1,ele2,ele3)
// startIndex - the position where you want to add/delete the elements
// numberofElementstoDelete - 
// ele1,ele2,ele3 - the new elements you want to add to an array(optional).
arr8.splice(2,5,10,20,30)
console.log(arr8)
arr8.splice(2,0,5,6,7,8,9)
console.log(arr8)


// 7. slice(startIndex,endIndex(optional)) - Return a new portion of an array
let arr9 = arr8.slice(7,14)
console.log(arr9)
console.log(arr8)

let arr10 = arr8.slice()
console.log(arr10)

// what is diff bet slice and splice

// forEach() - used to execute a function for every element.
arr1.forEach((num)=>{
    console.log(num);
})

arr4.forEach(num => {
   console.log(num * 2)
})

const result = arr4.forEach(num => num * 2)
console.log(result)
console.log(arr4)

// map() - used to transform every element and return a new array.

const map1 = arr4.map(num => num * 2)
console.log(map1)

const users = [
    {name : 'Nishant' , age : 30},
    {name : 'Sonali' , age : 20},
    {name : 'Riddhi' , age : 25},

]

const names = users.map(user => user.name)
console.log(names)

const ages = users.map(user => user.age)
console.log(ages)

// filter() - used to select element based on a condition.

const numbers = [10,15,20, 2,5,9,19,25,30,45,60,2,5,25,20];
const newnumbers = numbers.filter(num => num >= 20)
console.log(numbers)
console.log(newnumbers)

const newusers = users.filter( user => user.age >=25)
console.log(newusers)

// reduce() - it is used to reduce an array to one final value.

const total = numbers.reduce((sum,num)=> sum + num, 0)
console.log(total)

const total1 = map1.reduce((sum,num)=> sum + num, 0)
// sum & num sum = 0, num = 10 = 10
// sum = 10 num = 15 ==> 25
// sum = 25 num = 20 ==> 45

console.log(total1)

// find() it is used to return the first element that satisfied a condition.
const findnumber = numbers.find(num => num > 20)
console.log(numbers)
console.log(findnumber)

// sort() - it is used to sort an array

const fruits = ["Mango","Banana","Apple","Kiwi"];
console.log(fruits)
fruits.sort();
console.log(fruits)
numbers.sort()
console.log(numbers)
numbers.sort((a,b)=> a -b)
console.log(numbers)

numbers.sort((a,b)=> b - a)
console.log(numbers)

// reverse() - it is used to reverse an array
numbers.reverse()
console.log(numbers)

// join() - converts an array into string
const str = fruits.join(" ");
console.log(str)

// find out even numbers
const evennumbers = numbers.filter(num => num % 2 === 0);
console.log(evennumbers)

// find maximum number
const max = numbers.reduce((max,num) => num > max ? num : max)
console.log(max)

const min = numbers.reduce((min,num) => num < min ? num : min)
console.log(min)

// remove duplicate

console.log(numbers)
const unique = [...new Set(numbers)]  // ... spread operator
const uniq = new Set(numbers);
console.log(uniq)
console.log(unique)

// what is set?
// A set is a java script collection that is used to store unique values. duplicate values automatically ignored or removed.
const set = new Set([1,2,3,4,5,1,4])
console.log(set)