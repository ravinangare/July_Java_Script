// What is polymorphism?
// poly - Many & morphism - forms ====> Many Forms
// the same method or function can perform different actions based on the object ot input.
// one thing behave in different ways.
// Method Overriding (Run Time Polymorpsim)

class Animal{
    sound(){
        console.log("Animals makes Sound");
    }
}

class Dog extends Animal{       // call inheritance
    sound(){        // method overriding
        console.log("Dog Barks")
    }
}

class Cat extends Animal{
    sound(){    // method overriding
        console.log("Cat Meows")
    }
} 

const d1 = new Dog()
const c1 = new Cat()
const a1 = new Animal()

a1.sound()
d1.sound()
c1.sound()

function add(a,b){
    return a + b;
}

// add function - numbers -- addition & strings -- join

console.log(add(10,20))
console.log(add("java","script"))

// Method Overloading - (compile time polymorphism) Not directly supported

class payment{
    pay(){
        console.log("payment processing")
    }
    // pay(ruppes){    // method overloading
    //     this.ruppes = ruppes;
    // }
}

class CreditCard extends payment{
    pay(){
        console.log("Payment Processing using Credit Card")
    }
}

class UPI extends payment{
    pay(){
        console.log("Payment Processing using UPI")
    }
}

const p1 = new payment()
p1.pay()
// let pay = [new CreditCard(), new UPI] 
// pay.forEach(pay=>pay.pay()) 

const u1 = new UPI()
const cc = new CreditCard()
cc.pay()
u1.pay()


// we can achieve method overloading in function level using default or optional parameters.

// function sum(a,b){
//     return a + b ;
// }

// function sum(a,b,c){    //overloading
//     return a + b + c ;
// }

// console.log(sum(10,20))   // NaN - Not a Number a = 10, b = 20 , c = undefined

function sum(a,b,c){
    if(a,b,c){
        return a + b + c;
    }
    else{
        return a + b ;
    }
}

console.log(sum(10,20))  

// what is polymorphsim?
// what are the types of polymophism?
// What is Method overriding? 
// when child class provides  its own implementation of a method alredadefined in the parent class.
// can javascript support method overloading?

class calc{
    add(a,b,c){
        if(c !== undefined){
            return a + b + c
        }
        return a + b;
    }
}

const cal1 = new calc()
console.log(cal1.add(10,30))
console.log(cal1.add(10,30,40))


// what is difference between overloading & overriding 