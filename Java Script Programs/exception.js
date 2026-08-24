// Exception Handling
// What is Exception - it is an unexpected event or error that occurs during program execution and intrupts the normal flow of execution,
// Exception handling is used to handle runtime errors gracefully so that program does not crash unexpectedly.

// Java script provides:
    // try
    // catch
    // finally
    // throw

// try...catch block
// the code that may generate error is placed inside the try block.

// console.log(userName);     // ReferenceError: userName is not defined
// let num = 10;
// num.toUpperCase(); // TypeError: num.toUpperCase is not a function
// if(true{
//     console.log("Hello")
// }) // SyntaxError: Unexpected token '{'

// let arr = new Array(-1);  RangeError: Invalid array length

try{
    let arr = new Array(-1);
   // console.log(userName)
}catch(error){
    console.log("Exception Handled")
    console.log(error.message)
}

// throw statement--- used to create custom exception.

// let age = 15;
// if(age<18){
//     throw new Error("Age must be 18 or Above"); // create custome error
// }

function withdraw(Balance,amount){
    if(amount>Balance){
        throw new Error("Insufficient Amount")
    }
    return Balance - amount;
}

try{
withdraw(5000,7000)
}catch(error){
    console.log(error.message)
}


// finally block --- the finally block always executes whether an error occurs or not occurs.

let  a = 10;
try{
    console.log(a)
}catch(error){
    console.log(error.message)
}finally{
    console.log("Finally always executed")
}

// what is exception?
// what is exception handling?
// what is use of catch block?
// what does the finally block executes?
// what is use of throw?
// can a try block exists without catch?

try{
    console.log(b)
}
catch(erroe){
    console.log(erroe.message)
}finally{
    console.log("Hello")
}