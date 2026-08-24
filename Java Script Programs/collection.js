// what is collection ? 
//1) Indexed Collection (Array)
//2) Keyed Collection   (Map & Set)

const employee ={
    id : 101,
    name : "Nishant",
    role : 'QA Engineer',
    101 : "value1"
}
console.log(employee)

// limitation / drawback
// key must be string
// No built-in size properly.
// iteration is less conventient

for(const key in employee){
    console.log(key, employee[key])
}


// Map - A map stores data in key and value pair.
// Syntax

const map = new Map();

// set method
map.set("id",101);
map.set("name","Nishant")
map.set("role","QA Engineer")
map.set(101,"value1")
map.set("designation","QA Engineer");

console.log(map)

// get method - getting the data
console.log(map.get("name"))
console.log(map.get("role"))


// has method - checking key exists - return boolean

console.log(map.has("id"))
console.log(map.has("id_name"))

// delete method - delete the entry
map.delete(101)
console.log(map)

// size method - get the size of the map

console.log(map.size)

// clear - clear map
// map.clear()
// console.log(map)

for(const[key,value] of map){
    console.log(key,value)
}

map.forEach((value,key)=>{
    console.log(key, value)
})

// entries()
console.log(map.entries())
console.log(map.keys())
console.log(map.values())

// set - A set stores only unique values.

const emp = [10,20,30,40,10,20]
console.log(emp)

const numbers = new Set(emp)
console.log(numbers)

//set methods 
// add method
numbers.add(50)
numbers.add(60)
numbers.add(10)
console.log(numbers)

// delete method 
numbers.delete(10)
console.log(numbers)

// has method
console.log(numbers.has(10))
console.log(numbers.has(20))

// size
console.log(numbers.size)

// clear
numbers.clear()
console.log(numbers)

const fruits = new Set(["Apple","Banana","Mango","kiwi","Apple"])
fruits.add("Rasberry")
console.log(fruits)

for(const fruit of fruits){
    console.log(fruit)
}

fruits.forEach((fruit)=>{
    console.log(fruit)
})

console.log(fruits.entries())
console.log(fruits.keys())
console.log(fruits.values())


// what is difference between map & set
// Map                                           Set
// Two-dimesional(key-value pair)               one dimensional
// key must be unique, values can duplicate     Every value must be unique
// Fast data lookups and association            Removing duplicates and checking item existance
// set method used for add data                 add method
// get method is used to access the data        has(value) - check existance

// what is map?
// what is difference between map and object?
// how to create a map
// how to add key value pair in map? --> set



// find duplicate elements in an Array
let numbers1 =[10,20,30,40,20,10,50]

let duplicates = numbers1.filter((value,index)=> numbers1.indexOf(value) !== index
);

console.log([...new Set(duplicates)])

// remove duplicates
let uniques = [... new Set(numbers1)]
console.log(uniques)

// find duplicate characters from string
let str = "automation"
let uniq = [... new Set(str)]
console.log(uniq.join(""))

// count occurance of characters
let count = {};
for(let num of numbers1){
    count[num] = (count[num] || 0) + 1  // logic count[10] ===> undefined || 0  ==> 1
                                        //       count[10] ===> 1   || 0 ==> 1 + 1 ==> 2
}
console.log(count)

// largest number
let largest = Math.max(...numbers1)
console.log(largest)

let smallest = Math.min(...numbers1)
console.log(smallest)

// second largest

uniques.sort((a,b) => b - a )
console.log(uniques[1])