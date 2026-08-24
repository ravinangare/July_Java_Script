// what is class? --> A clss is blueprint or template used to create objects.
// it defines variables & methods.
// what is object? --> it is an instance of an class.
// objects contains real values.

// Syntax.

// class className{
//                 constructor(parameter){
//                     this.parameter = parameter;
//                 }

//                 methodName(){
//                     // body
//                 }
//                 methodName1(){
//                     // body
//                 }
// }

class student{
        constructor(name,age){
            this.name = name;
            this.age = age;
        }
        dispay(){
            console.log("student name "+this.name);
            console.log("student age "+this.age)
        }
}

// object syntax
// let objectName = new constructor();  // object creation.

let s1 = new student("Pratik",25);  // physical or real entity
s1.dispay();
let s2 = new student("Riddhi",24);
s2.dispay();

// what is diff between class & object
// class is template or blueprint  // intsnace of an class
// logical entity                   // physical real entity
// no memory required               // memory required.

class greet{
    demo(){
        console.log("welcome");
    }
}
let g1 = new greet();
g1.demo();

// traditional way to create contsructor before ES6
function person(name,age){
    this.name = name;
    this.age = age;
}

const p1 = new person("sonali",28)
console.log(p1.name)
console.log(p1.age)

// what is constructor?
// it is special method inside the class
// it is mainly used to initialize object variables.
// it runs automatically when an object is created.
// the constrctor method name is always constructor in java script.

class car{
    constructor(brand="Mahindra",year=2026,cc){
        this.brand = brand;
        this.year = year;
        this.cc = cc;
    }
    // constructor(color){
    //     this.color = color  // SyntaxError: A class may only have one constructor
    // }
    dispay(){
        console.log(this.brand+ " " +this.year + " " +this.cc)
    }
}

let c1 = new car();
c1.dispay();
let c2 = new car("Toyota",2026,2000)
c2.dispay();

// what is class in java script?
// what is an object?
// what is constructor?
// why do we use constructor?
// what is this ? --> this refers to the current class object.
// what is the new keyword? ---> new is used to creatr an object from class.
// let c3 = new car() ===> it creates a new instance of car class and automatically class the car CSSPositionTryDescriptors.
// can a class have multiple constrctor? // SyntaxError: A class may only have one constructor
// can a constrctor return a value?
