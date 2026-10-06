import{test,expect,request} from '@playwright/test';

test('POST API Test',async({request})=>{
   const response = await request.post('https://demoqa.com/Account/v1/User',{
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
})

test('Token Generation API Test',async({request})=>{
   const response = await request.post('https://demoqa.com/Account/v1/GenerateToken',{
        data: {
            "userName": `testuser1791255022723`,
            "password": "Test@123"
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    expect(responseBody).toHaveProperty('token');
    console.log(await responseBody);
})

test('User Authorized API Test',async({request})=>{
   const response = await request.post('https://demoqa.com/Account/v1/Authorized',{
        data: {
            "userName": `testuser1791255022723`,
            "password": "Test@123"
        }
    })
    expect(response.status()).toBe(200);
    const responseBody = await response.json();
    console.log(await responseBody);
})

test('User Delete API Test',async({request})=>{
    const userID = '9d33dd16-88a7-4f59-9429-d6bcf70eaa42'
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6InRlc3R1c2VyMTc5MTI1NDcyOTYyMiIsInBhc3N3b3JkIjoiVGVzdEAxMjMiLCJpYXQiOjE3OTEyNTQ3NTV9.3XAW1eGhv6xodWiXaRP0Ii8SQl4Y_U4vtB0WsH0z2S8';
   const response = await request.delete(`https://demoqa.com/Account/v1/User/${userID}`,{
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    expect(response.status()).toBe(204);
})