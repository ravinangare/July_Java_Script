import{test,expect} from '@playwright/test';

test('playwright test methods',async({page})=>{
    await page.goto("https://demoqa.com/automation-practice-form")
    // Type text into input field (type method is used to type text into input field - deprecated)
    // await page.locator('#firstName').type("Sonali");
    // await page.locator('#lastName').type("Patil");
    // await page.locator('#userEmail').type("sonali.patil@example.com");
    // Fill text into input field (fill method is used to fill text into input field - recommended)
    await page.locator('#firstName').fill("Sonali");
    await page.locator('#lastName').fill("Patil");
    
    // presssequence method is used to simulate pressing a sequence of keys on the keyboard.
    await page.locator('#userEmail').pressSequentially("sonali.patil@example.com");
    await page.locator('#userNumber').pressSequentially("9423111564");
    // click method is used to click on an element.
    await page.locator('#gender-radio-2').click();
    await page.locator('#dateOfBirthInput').fill("10 May 2000");
    // textContent method is used to get the text content of an element.
    const hobbiestext = await page.locator("//label[text()='Sports']").textContent();
    console.log("Hobbies text is: "+hobbiestext);

    // inputValue method is used to get the value of an input field.
    const userEmailtext = await page.locator('#userEmail').inputValue();
    console.log("User Email text is: "+userEmailtext);
    const hobbies = await page.locator('label[for="hobbies-checkbox-2"]').innerText();
    console.log("Hobbies text is: "+hobbies);
   // get text of all the elements matching the locator using allInnerTexts & allTextContent method.
    const gender_HobbiesText = await page.locator('label[class="form-check-label"]').allInnerTexts();
    console.log("Gender and Hobbies text is: "+gender_HobbiesText);
    const gender_HobbiesTextContent = await page.locator('label[class="form-check-label"]').allTextContents();
    console.log("Gender and Hobbies text content is: "+gender_HobbiesTextContent);
    console.log("Gender and Hobbies text content is: "+gender_HobbiesTextContent.length);
    console.log(typeof(gender_HobbiesTextContent));
    console.log("Gender and Hobbies text content is: "+gender_HobbiesTextContent[0]);

    // get individual text of all the elements matching the locator using nth method.
    const gender_HobbiesText_nth = await page.locator('label[class="form-check-label"]').nth(2).textContent();
    console.log("Gender and Hobbies text (nth): "+gender_HobbiesText_nth);

    // first method is used to get the first element matching the locator.
    // last method is used to get the last element matching the locator.
    const gender_HobbiesText_first = await page.locator('label[class="form-check-label"]').first().textContent();
    console.log("Gender and Hobbies text (first): "+gender_HobbiesText_first);
    const gender_HobbiesText_last = await page.locator('label[class="form-check-label"]').last().textContent();
    console.log("Gender and Hobbies text (last): "+gender_HobbiesText_last);

    const hobbies1 = await page.locator('label[class="form-check-label"]');
    const count = await hobbies1.count();
    console.log("Count of hobbies is: "+count);
    for(let i=0;i<count;i++){
        const hobby = await hobbies1.nth(i).textContent();
        console.log("Hobby "+(i+1)+" is: "+hobby);
    }
})