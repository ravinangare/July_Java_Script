// what is string? ---> primitive datatype.
// it is used to store sequence of characters. it is used to manipulate text.
// it is immutable.

let str = "Hello";
console.log(str[0])
str[0] = "h";       // immutable
console.log(str[0])
console.log(str)
console.log(typeof(str))

let str1 = 'World';
console.log(typeof(str1))

let str2 =`${str} ${str1} Utkarshaa Academy Utkarshaa Hello`;
console.log(typeof(str2))
console.log(str2)

let str3 = " "+ str +"  "+str1+"   Utkarshaa Academy"
console.log(str3)

// string constructor
let str4 = new String("Nishant")
console.log(typeof(str4))

// methods 
// 1. length - it will return of string
console.log(str4.length)
console.log(str2.length)

//2.charAt() - it will return the character at the specified index.
console.log(str4.charAt(0))
console.log(str4.charAt(6))
console.log("********************")
for(let i = 0; i<str4.length;i++){
    console.log(str4.charAt(i))
}

console.log("********************")
for(let char of str4){
    console.log(char)
}

// 3. concat() - it will concatenate two or more strings and it will return a new strings.
let city = "pimpari"
let str5 = city.concat(" chinchwad")
let str6 = str.concat(" ",str1)
console.log(str5)
console.log(str6)

// 4 . includes() - it will return true or false if the string contains specified substring it will return true either false
console.log(str2.includes("World"))
console.log(str2.includes("Nishant"))


//5. indexOf() - it will return the index of the first occurance of specified substring. if it will not found then it will return -1
console.log(str2.indexOf("Hello"))
console.log(str2.indexOf("Utkarshaa"))
console.log(str2.indexOf("Nishant"))

//6. lastIndexOf() - it will return the index of the last occurance of specified substring. if it will not found then it will ret
console.log(str2.lastIndexOf("Hello"))
console.log(str2.lastIndexOf("Utkarshaa"))
console.log(str2.lastIndexOf("Nishant"))

//7. toUpperCase() - 
console.log(str2.toUpperCase())
console.log(str2)

//8. toLowerCase()
console.log(str2.toLowerCase())

//9. slice() - it will retuen a new string that is a subset of the original string. 
let slicedString = str2.slice(0,30) 
console.log(slicedString)

let slicedString1 = str2.slice(30,0) // if startIndex > endIndex return an empty string
console.log(slicedString1)
let slicedString2 = str2.slice(30) 
console.log(slicedString2)

let slicedString3 = str2.slice(-31) 
console.log(slicedString3)

//10. substring() -  it will retuen a new string that is a subset of the original string.
// substring is similar to slice but does not accept negative indices. it will treated as 0;
console.log("***********************")
let slicedString4 = str2.substring(-31)   // -31 == 0
console.log(slicedString4)

console.log(str2.substring(0))

let slicedString5 = str2.substring(30,0) // if startIndex > endIndex return ---> swaps the two arguments.
console.log(slicedString5)


console.log(str2.substring(0,20))
console.log(str2.substring(21))
// what is diff bet slice and substring?

// 11. trim() - it will return new string with the whitespaces removed from the both end.
let str7 = "     Pratik     Kshirsagar                    ";
console.log(str7.length)
let str8 = str7.trim();
console.log(str8.length)

//12. trimStart() - it will return new string with the whitespaces removed from start only.
let str9 = str7.trimStart()
console.log(str9.length)

// 13. trimEnd() - it will return new string with the whitespaces removed from ending only.
let str10 = str7.trimEnd()
console.log(str10.length)

// 14. replace() - it will return a new string with specified substring replaced by new string.

let str11 = "Hello Hello World"
let str12 = str11.replace("Hello","JavaScript");
console.log(str11)
console.log(str12)

// 15. replaceAll() - it will return a new string with specified substring replaced all by new string.
let str13 = str11.replaceAll("Hello","JavaScript");
console.log(str11)
console.log(str13)

// 16. split() - it will return an array of substring. split by the specified seperator.
 let str14 = str11.split(" ")
 console.log(str14)

 let str15 = "Hello World, Hello JavaScript"
 let str16 = str15.split(",")
 console.log(str16)

  let str17 = str15.split("o")
 console.log(str17)

 let parts = str11.split("Hello");
 console.log(parts)
 let result = parts[0] + "Hello" + parts[1] + "JavaScript" + parts[2]
 console.log(result)

 let last = str11.lastIndexOf("Hello");

 let result1 = str11.substring(0,last) + "JavaScript" + parts[2];
 console.log(result1)
