// oops concepts --> object oriented programming system.
// 4 pillars ---> Inheritance, Polymorphism, Abstraction, Encapsulation
// Inheritance --->  inheritance is an oop concept where one class can acquire the properties of another class.
// it helps us reuse code and avoid duplications.
/*
class BaseClass{
    constructor(page){
        this.page = page;
    }
    click(locator){
        this.page.click(locator)
    }
    enterText(locator,text){
        this.page.fill(locator,text)
    }
}

class LoginPage extends BaseClass{

    login(username,password){
        this.enterText('#username',username)
        this.enterText('#password',password)
        this.click('#login')
    }
}

const loginpage = new LoginPage();
loginpage.login('admin','admin123')


BaseClass
    |
    |
    |
LoginPage 
LoginPage inherits click() and enterText() from BaseClass.  
*/
// Types of Inheritance.
// 1. Single Inheritance --> one child class inherits properties from one parent class. 
// 2. Multilevel Inheritance  --> one class inherits from another class, and a third class inherits properties from the second one.

class GrandParent{
        house(){
            console.log("Grandparents House");
        }
}

class Parent extends GrandParent{
        car(){
            console.log("Parents Car")
        }
}

class Child extends Parent{
        bike(){
            console.log("Childs Bike")
        }
}

const child = new Child();
child.bike();
child.car();
child.house();

// 3. Hierarchical Inheritance ---> multiple child classes inherits from same parent class

class Employee{
      constructor(name){
            this.name = name;
        }
        login(){
            console.log("Employee Login")
        }
}

class Developer extends Employee{

        constructor(name,tool){
            super(name)
            this.tool = tool;
        }
        codeWrite(){
            console.log("Developer writes code")
        }
        display(){
            console.log(this.name)
            console.log(this.tool)
        }
}

class Tester extends Employee{

    testApplication(){
        console.log("Tester test the application")
    }
}

const dev = new Developer("Nishant","playwright");
const tester = new Tester();
dev.login();
dev.codeWrite();
dev.display();

tester.login();
tester.testApplication();


/*
            Employee
                |
                |
            /       \
        /               \
      Developer         Tester
                
   */

// 4. Multiple Inheritance ---> java script does not support multiple inheritance directly.

class A{
    methodA(){

    }
    login(){

    }
}

class B{
    methodB(){

    }
    login(){

    }
}

// class C extends A, B{  // SyntaxError: Unexpected token ','

// }
// const c = new C();
// 5.hybrid Inheritance ---> hybrid iheritance is a combination of two or more inheritance types.

/*
            Employee
                |
                |                       // Hierarchical inheritance + multilevel Inheritance ==> Hybrid inheritance
            /       \
        /               \
      Developer         Tester
                            |
                            |
                            |
                            |
                    Automation Tester
                       */
// extends keyword --> the extends keyword is used to create a child class from a parent class.
// use mixins ---> multiple Inheritance.

const Logger = {
        log(message){
            console.log(message)
        }
};

const validator = {
        validate(){
            console.log("validating data")
        }
}

class TestPage{

}

Object.assign(TestPage.prototype, Logger , validator);

const page = new TestPage();
page.log("Test Started")
page.validate();

// super keyword ---> super is used to access the parent class constructor or methods.



class P1{
        display(){
            console.log("P1 display");
        }
}

class C1 extends P1{
    display(){
        super.display();
        console.log("C1 display");
    }
}

const obj = new C1();
obj.display();

// super() in constrctor --> calls the parent class constructor.

// Hybrid Inheritance
class BasePage{
    openpage(){
        console.log("opening page")
    }
    click(locator){
        console.log(`Clicking ${locator}`)
    }
}

class LoginPage extends BasePage{
    login(username,password){
        console.log(`Login with ${username} and ${password}`)
    }
}

class HomePage extends BasePage{
    SearchProduct(product){
        console.log(`Searching the ${product}`)
    }
}

class AdminLoginPage extends LoginPage{
    adminLogin(){
        console.log("Admin Login")
    }
}

const login = new LoginPage();
login.openpage()
login.click("#login");
login.login("admin","admin123")

const home = new HomePage()
home.openpage()
home.click("#open")
home.SearchProduct("Laptop")

const admin = new AdminLoginPage()
admin.openpage()
admin.click("#Base")
admin.login("admin","admin123")
admin.adminLogin()


// What is inheritance?
// why do you  use inheritance?
// what is extends keyword
// what is super?
// why do we need super() in a child constructor.
// what are the types of inheritance?
// explain single inheritance
// does multiple inheritance support in javascript? --> mixins

// polymorphism
// poly ==> Many    morphism ==> forms
