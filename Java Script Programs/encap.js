// Encapsulation - it is the process of wrapping data and methods into a single unit and restrcting direct access to internal data.
// class with private fields
// getters/setters
// closures

const employee = {
    name : "Nishant",
    salary : 150000
}

employee.salary = -160000;  // invalid value
console.log(employee.salary)      // problem statement - any one can update / access directly.

// getters & setters

class Employee{
    constructor(name,salary){
        this.name = name;
        this._salary = salary;  // treat like private 
    }

    getSalary(){
        return this._salary;
    }
    setSalary(amount){
        if(amount>0){
            this._salary = amount;
        } else{
            console.log("Salary must be positive")
        }
    }
}

const emp = new Employee("Ashish",150000)
console.log(emp.getSalary())
emp.setSalary(-150000)
emp.setSalary(160000)
console.log(emp.getSalary())

// data is accessed through methods, allowing validations. 


// class with private fields (#)

class BankAccount{
    #balance;   // private variable
    constructor(balance){
        this.#balance = balance;
    }

    deposit(amount){
        this.#balance += amount;
    }

    getBalance(){
        return this.#balance;
    }
}

const acc = new BankAccount(10000);
acc.deposit(5000)
console.log(acc.getBalance())

// #balance can not be accessed outside the class.

// closure

function bankAccount(balance){
        let currentBalance = balance;

        return{
            deposit(amount){
                currentBalance += amount;
            },
            getBalance(){
                return currentBalance;
            }
        }
}

const acc1 =  bankAccount(100000);
console.log(acc1.getBalance());
acc1.deposit(50000);
console.log(acc1.getBalance());
console.log(acc1.currentBalance)


class ATM{
    #pin = 4321;    // private field
    validatePin(inputPin){
        return this.#pin === inputPin;
    }
}

const atm = new ATM();
// atm.#pin = 5675; SyntaxError: Private field '#pin' must be declared in an enclosing class
console.log(atm.validatePin(1234));
console.log(atm.validatePin(4321));


// Abstraction -- it is the process of hiding implementation details and exposing only the necessary functionality to the user.
// it helps reduce complexity and improves the code maintanibility.

class Car{
    #startEngine(){
        console.log("checking battery....")
        console.log("Injecting Fuel....")
        console.log("starting Engine.....")
    }
    start(){
        this.#startEngine();
        console.log("car is ready to drive.....")
    }
}

const car = new Car()
car.start();


class ATM1{
    withdraw(amount){
      //  this.amount = amount;
        this.#validatePin();
        this.#checkBalance();
        this.#dispenseCash(amount);
        console.log("Please collect your cash ......")
    }
    #validatePin(){
        console.log("Pin validating")
    }
    #checkBalance(){
        console.log("Balance Checked")
    }
    #dispenseCash(amount){
        console.log(`Dispensing cash ${amount}`)
    }
}

const atm1 = new ATM1()
atm1.withdraw(50000)

// difference bet encapsulation and Abstraction
// Encapsulation                                  Abstraction 
// Hides Data (variables)                   Hides implementation (methods) 
// focus on data security                   focus on simplicity
// achieved using getter & setters          Achieved using private methods
// class with private fields & closure      
// "How to protect the data?"               "How to hide the complexity?"

// what is encapsulation?
// why encapsulation is important?
// what is abstraction?
// How does POM demonstartaes Encapsulation and Abstraction?
// Encapsulation --> 
class LoginPage{
    constructor(page){
        this.page = page;
        #this.username = page.locator("input[name='username']")
        #this.password = page.locator("input[name='password']")
        #this.LoginBtn = page.locator("button.orangehrm-login-button")
    }
    #EnterUsername(username){
        this.page.fill(#this.username, username);
    }
    #EnterPassword(password){
        this.page.fill(#this.password, password);
    }
    #ClickonLoginBtn(){
        this.page.click(this.#ClickonLoginBtn);
    }
    login(username,password){
        this.#EnterUsername(username)
        this.#EnterPassword(password)
        this.#ClickonLoginBtn()
    }
}

// can java script have private variables?
// what are getters and setters?

