// conditional statement - used to perform different actions on different conditions.
// flow control --> program execution
// if statement, if else statement , if else if ladder statement, netsed if statement, switch case statement

// if statement - if statement executes a block of code only if condition is true.
/*
    if(condition){
            // block of code
    }

*/
let age = 19;
if(age>=18){
    console.log("Elegible for Voting")
}

// if else statement - statement executes one block of code. if condition is true then it will execute if block of code and condition is false then it will executes else block of code.
/*
    if(condition){
            // if block of code
    }   else{
            // else block of code
        }

*/
if(age>=18){
    console.log("Elegible for Voting")
} else {
    console.log("Not Eligible for Voting")
}

// if else if ladder statement - used when multiple conditions need to checked.
// syntax
/*
    if(condition){
            // block of code
    } else if(condition){
      // block of code
    } else if(condition){
      // block of code
    } else if(condition){
      // block of code
    } else if(condition){
      // block of code
    } else if(condition){
      // block of code
    } else {
         // block of code
        }

*/
let score = 70;
if(score>=90 && score<=100){
    console.log("Grade A+")
} else if(score>=80 && score<90){
    console.log("Grade A")
} else if(score>=70 && score<80){
    console.log("Grade B+")
} else if(score>=60 && score<70){
    console.log("Grade B")
} else if(score>=50 && score<60){
    console.log("Grade Pass")
} else{
    console.log("Result Fail")
}

// switch case statement - used to perform different actions based on different conditions.
// syntax
/*  
    switch(expression){
        case value1:
            // block of code
            break;
        case value2:
            // block of code
            break;
        default:
            // block of code
    }
*/
let day = 6;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

if(day == 1){
    console.log("Monday");
} else if(day == 2){
    console.log("Tuesday");
} else if(day == 3){
    console.log("Wednesday");
} else if(day == 4){
    console.log("Thursday");
} else if(day == 5){
    console.log("Friday");
} else if(day == 6){
    console.log("Saturday");
} else if(day == 7){
    console.log("Sunday");
} else {
    console.log("Invalid day");
}

switch(score){
    case 100:
        console.log("Grade A+");
        break;
    case 90:
        console.log("Grade A");
        break;
    case 80:
        console.log("Grade B+");
        break;
    case 70:
        console.log("Grade B");
        break;
    case 60:
        console.log("Grade C");
        break;
    default:
        console.log("Invalid score");
}   

// Nested if statement - if statement inside another if statement.
// syntax
/*
    if(condition){  
        if(condition){
            // block of code
        }   
    } 
*/
 age = 19;
let hasLicense = false;
if(age>=18){
    if(hasLicense){
        console.log("Eligible for driving");
    } else {
        console.log("Not eligible for driving because you don't have a license");
    }
} else {
    console.log("Not eligible for driving because you are not old enough");
}

// what is the difference between if else if statement and switch case statement?
// difference between if and else if?
// difference between if else and if else if statement?
// what is use of nested if statement?
let username = "admin";
let password = "admin123";
if(username == "admin"){
    if(password == "admin123"){ 
        console.log("Login successful");
    } else {
        console.log("Invalid password");
    }
} else {
    console.log("Invalid username");
}   
// what is switch case?
// why is break statement used in switch case?
// what is default case in switch case?
