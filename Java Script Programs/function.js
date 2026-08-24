// what is function?
// it is reusable block of code designed to perform specific task.
// instead of writting the same code repeatedly, we create a function and call that function whenever needed.
// Basic synatx.
/*
    function functionName(){
            // reusable block of code
    }               // function declaration

    functionName()          // calling a function
*/

// Named Function
function greet(){
    console.log("Hello All")
    console.log("welcome to Utkarshaa Academy Pune")
}

greet();

// function add(){
//     console.log(10 + 20)
// }
// Function with parameters (paramerized function)
function add(a,b){
    console.log(a+b)
}
add(10,30)
add(20,40)

// Function with Return value

function sub(a,b){
    return a - b;
}
let result = sub(10,20);
console.log(result);

// function with default paramters.

function greet(name= "Ashish"){
    console.log("Hello " +name);
}

greet();
greet("Nishant");

// unnamed function 
// Function Expression
// A function can be stored inside a variable.
const  prod = function(a,b){
    return a * b;
}

console.log(prod(10,20))



// Anonymous Function
// A function without name is called as anonymous function

const greet1 = function(){
    console.log("Hello All")
    console.log("welcome to Utkarshaa Academy Pune")
}

greet1()

setTimeout(function(){
    console.log("Hello after 5 seconds")
},5000)

// anonymous functions are commonly used as callbacks.

// Arrow Function

function div(a,b){
    return a / b;
}   

console.log(div(15,5));

// const div1 = (a,b) => a / b;
// console.log(div1(20,4))

const div1 = (a,b) => {
    return a / b;
}
console.log(div1(20,4))

const square = x => x * x ;
console.log(square(5))


const greet2 = ()=>{
    console.log("Hello")
}
greet2();



// class LoginOrangeHRM{
//     constructor(page){
//         this.page = page;
//         this.usernameInput = page.getByPlaceholder("Username");
//         this.passswordInput = page.getByPlaceholder("Password");
//         this.loginBtn = page.getByText("Login");
//         this.DashboardHeading = page.locator("h6.oxd-topbar-header-breadcrumb-module")
//     }

//         async login(username,password){
//           await this.usernameInput.fill(username);
//           await this.passswordInput.fill(password);
//           await this.loginBtn.click();
// }
//         async validateDashboard(){
//             return this.DashboardHeading.containText();
//         }
// }


// test('Login Test',async({page}) => {
//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//     const loginorangeHRM = new LoginOrangeHRM(page);    // constructor function
//     await loginorangeHRM.login('admin',admin123)
//     await expect(loginorangeHRM.DashboardHeading().containText('Dashboard'))
// })

// IIFE - immdediately invoked function expression
(function(){
    console.log("Function executed")
})();

(function(name){
    console.log("Hello welcome " +name)
})("Nishant");

// callback function
// when we pass a function as an argument to another function, it is called as callback function.


function message(){
    console.log("Welcome to java script")
}

function greet(name, callback){
    console.log("Hello "+name);
    callback;
}
greet("Ravi",message())

setTimeout(()=>{
    console.log("Hello")
},2000)

// nested function - a function defined inside another function is called as nested function.

function outer(){

    function inner(){
        console.log("Inside Inner Function")
    }
    inner();
}


outer()

// Recursive function - A function that calls itself is called as recursive function.

function factorial(n){
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5))