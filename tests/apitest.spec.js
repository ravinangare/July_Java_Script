import{test,expect,request} from '@playwright/test';

const API_Account_url = 'https://demoqa.com/Account/v1';
const API_BookStore_url = 'https://demoqa.com/BookStore/v1';

let registeredUserName = '';
let registerduserId = '';
let token = '';
let isbn = '';
let newIsbn = '';

test.describe.serial('Book Store API Test Cases',()=>{

test('POST API Test',async({request})=>{
   const response = await request.post(`${API_Account_url}/User`,{
        data: {
            "userName": `testuser${Date.now()}`,
            "password": "Test@123"
        }
    })
    expect(response.status()).toBe(201);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('userID');
    expect(responseBody).toHaveProperty('username');
    expect(responseBody).toHaveProperty('books');
    console.log('User created successfully with ID:', responseBody.userID);
    console.log(await responseBody);
    registeredUserName = await responseBody.username;
    registerduserId = await responseBody.userID;
    console.log(await registerduserId)
    console.log(await registeredUserName)
})

test('Token Generation API Test',async({request})=>{
   const response = await request.post(`${API_Account_url}/GenerateToken`,{
        data: {
            "userName": registeredUserName,
            "password": "Test@123"
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    console.log(await responseBody);
    token = responseBody.token;
})

test('User Authorized API Test',async({request})=>{
   const response = await request.post('https://demoqa.com/Account/v1/Authorized',{
        data: {
            "userName": registeredUserName,
            "password": "Test@123"
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody);
})

// test('User Delete API Test',async({request})=>{
//     const response = await request.delete(`https://demoqa.com/Account/v1/User/${registerduserId}`,{
//         headers: {
//             'Authorization': `Bearer ${token}`
//         }
//     })
//     expect(response.status()).toBe(204);
// })

test('Get All Books API Test',async({request})=>{
    const response = await request.get('https://demoqa.com/BookStore/v1/Books')
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('books');
    console.log(await responseBody);
    const book = responseBody.books[0];
    const book1 = responseBody.books[1];
    expect(book).toHaveProperty('isbn');
    expect(book).toHaveProperty('title');
    expect(book).toHaveProperty('subTitle');

    const author = book.author;
    expect(author).toBe('Richard E. Silverman')
    const pageCount = book.pages;
    expect(pageCount).toBe(234)
    isbn = book.isbn;
    newIsbn = book1.isbn;
})

test('Get Book By ISBN API Test',async({request})=>{
    const response = await request.get(`https://demoqa.com/BookStore/v1/Book?ISBN=${isbn}`)
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody);
    expect(responseBody).toHaveProperty('isbn');
    expect(responseBody).toHaveProperty('title');
    expect(responseBody).toHaveProperty('subTitle');
    expect(responseBody).toHaveProperty('author');
    expect(responseBody).toHaveProperty('publish_date');
    expect(responseBody).toHaveProperty('publisher');
    expect(responseBody).toHaveProperty('pages');
    expect(responseBody).toHaveProperty('description');
    expect(responseBody).toHaveProperty('website');

    const author = responseBody.author;
    expect(author).toBe('Addy Osmani')
    const pageCount = responseBody.pages;
    expect(pageCount).toBe(254)
})

test('Get User API Test',async({request})=>{
    const response = await request.get(`https://demoqa.com/Account/v1/User/${userID}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody);
})

test('update Books API Test',async({request})=>{

    const response = await request.put(`https://demoqa.com/BookStore/v1/Books/${isbn}`,{
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
        },
        data: {
            "isbn": newIsbn,
            "userId": userID,
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody);
})

// test('update Books API with partial data Test',async({request})=>{
//     const userID = 'decdff2d-b302-45bc-9852-483f0b1c4a76'
//     const token = '******'
//     const isbn = '9781593277574'
//     const response = await request.patch(`https://demoqa.com/BookStore/v1/Books/${isbn}`,{
//         headers: {      
//         'Authorization': `Bearer ${token}`,
//         'Content-Type': 'application/json'
//         },
//         data: {
//             "userId": userID,   
//             "author": "Richard E. Silverman"
//         }
//     })
//     expect(response.status()).toBe(200);
//     const responseBody = response.json()
//     console.log(responseBody)
// })

})