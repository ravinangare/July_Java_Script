// Async & Await
// promise --> pending, resolve / reject

console.log("A")
console.log("B")
console.log("C")


console.log("Start")
setTimeout(()=>{
    console.log("Async task Completed")
},1000)
console.log("End")

const promise = new Promise((resolve,reject)=>{
    let success = true;
    if(success){
        resolve("operation successfull")
    }
    else{
        reject("operation failed")
    }
})

promise.then(result =>{
    console.log(result)
})
.catch(error=>{
    console.log(error)
})
.finally(element =>{
    console.log("always executed")
})

function fetchUser(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("user Data fetched succeesfully")
        },2000)
    })
}

fetchUser()
    .then(data=>{
        console.log(data)
    })
    .catch((error)=>{
        console.log(error)
    })

    // Async Function 
    // async keyword makes a function retuen a promise automatically.
    async function Greet() {
        return Promise.resolve("user Data Fetched successfully with promise")
    }
    Greet()
        .then(result =>{
            console.log(result)
        })
        .catch(error =>{
            console.log(error)
        })

// Await - await keyword pauses execution until a promise is resolved.

function getData(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve("Data Received")
        },5000)
    })
}

async function displayData(){
    const result = await getData();
    console.log(result)
    console.log("Hello")
    console.log("Data Fetched")
}
displayData()


//  async function login(username,password){
//    await userNameInput.fill(username);
//    await passwordInput.fill(password);
//    await LoginBtn.click()
// }

// what is promise?
// why do we use promise? --> handle asynchronous operation.
// what is async 
// what is await 
// diff bet promise and async await
// what is .then()
// what is .catch()
// what is .finally()