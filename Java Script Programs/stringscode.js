// reverse string
// palindrome --- "madam"  ----> "madam"
let str ="madam"
let reverse = str.split("").reverse().join("");

if(str === reverse){
    console.log("palindrome")
} else {
        console.log("Not palindrome")
}

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("dad"))
console.log(isPalindrome("hello"))

// Remove duplicate characters
let str1 = "automation";

let result = [...new Set(str1)]

console.log(result.join(""))

//  characters
let nondup = new Set();
for(let char of str1){
    if(nondup.has(char)){
        console.log(char)
    }
    nondup.add(char)
    console.log(nondup)
}

let result1 = [...str1].filter((char, index) => str1.indexOf(char) === str1.lastIndexOf(char)).join("")
console.log(result1);

let result2 ="";
for(let i = 0; i<str1.length;i++){
    let count = 0;
        for(let j = 0;j<str1.length;j++){
            if(str1[i] === str1[j]){
                count++
            }
        }
        if(count === 1){
            result2 += str1[i]
        }

        // if(count > 1){
        //     result2 += str1[i]
        // }
}
console.log(result2)


// check anagram ---> two strings are anagrams if they contain the same characters.

// listen
// silent

let str2 = "listen"
let str3 = "silent"

let result3 = str2.toLowerCase().split("").sort().join("")
let result4 = str3.toLowerCase().split("").sort().join("")

if(result3 === result4){
    console.log("Anagram")
    }else{
        console.log("Not Anagram")
    }


function isAnagram(str1,str2){
    return str1.toLowerCase().split("").sort().join("") === str2.toLowerCase().split("").sort().join("")
}
console.log(isAnagram("listen","silent"));
console.log(isAnagram("state","taste"));
console.log(isAnagram("hello","world"));

// "Playwright Automation"
// "thgirwyalP noitamotuA"

let str5 =  "Playwright Automation Testing";
let res = str5.split(" ").map(word => word.split("").reverse().join("")).join(" ");
let res1 = str5.split(" ").reverse().join(" ");
console.log(res)
console.log(res1)


let str6 = "automation"
let count1 = {};
    for(let char of str6){
        if(count1[char]){
            count1[char]++;
        } else{
            count1[char] = 1
        }
    }
    console.log(count1)