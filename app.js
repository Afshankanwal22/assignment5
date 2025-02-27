//                                            CHAPTER  21 TO 25

//Qno:1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName =prompt("ENTER YOUR FIRST NAME");
// let lastName= prompt("ENTER YOUR LAST NAME");
// let fullName=firstName+lastName;
// alert(`${fullName}`);

// Qno:2 Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser
// let myFavoritePhone=" Samsung Galaxy S6 Edge Plus"
// console.log(myFavoritePhone.length)
// document.write(`My Favorite Mobile Phone is: ${myFavoritePhone}<br />`)
// document.write(`Length  of String: ${myFavoritePhone.length}`);

// Qno:3 Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .
// let countryName= "Pakistani"
// console.log(countryName.indexOf("n"));
// document.write(`String:${countryName}<br />`)
// document.write(`Index of 'n': ${countryName.indexOf("n")}`)

// Qno:4 Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.
// let wordName="Hello World"
// console.log(wordName.lastIndexOf("l"));
// document.write(`String: ${wordName}<br />`);
// document.write(`Last Index of 'l': ${wordName.lastIndexOf("l")} `);

// Qno:5 Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.
// let character="Pakistani"
// console.log(character.slice(3,4));
// document.write(`String:${character}<br />`);
// document.write(`Character at Index ${character.indexOf("i")}:${character.slice(3,4)}`);

// Qno:6 Repeat Q1 using string concat() method.
// let firstName =prompt("ENTER YOUR FIRST NAME");
// let lastName= prompt("ENTER YOUR LAST NAME");
// alert("Hello " + firstName.concat(lastName))

// // Qno:7 Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.
// let city = "Hyderabad";
// let replacement=city.replace("Hyder","Islam")
//  document.write(`City: ${city} <br /> After replacement: ${replacement}`)

// Qno:8 Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// let message ="Ali and sami are best friends.They play cricket and football together."
// let replace = message.replace(/and/g," & ")
// document.write(`Message: ${message}<br /> After replacement: ${replace}`)

// Qno: 9 Write a program that converts a string “472” to a number 472. Display the values & types in your browser.
// let StringNumber ="472";
// console.log(typeof(StringNumber))
// let number =+StringNumber 
// console.log(number)
// console.log(typeof(number))
// document.write(`Value:${StringNumber}<br />Type:${typeof(StringNumber)}<br />Value: ${number}<br />Type: ${typeof(number)}`)

// Qno:10 Write a program that takes user input. Convert and show the input in capital letters.
// let userInput=prompt("Enter your word");
// console.log(userInput.toUpperCase(userInput))
// document.write(`User input: ${userInput}<br />Upper case: ${userInput.toUpperCase(userInput)}`);

// Qno:11 Write a program that takes user input. Convert and show the input in title case.
// let userInput=prompt("Enter your word");
// let firstchar=userInput.slice(0,1)
// firstchar=firstchar.toUpperCase()
// let otherchar= userInput.slice(1)
// otherchar=otherchar.toLowerCase()
// let titled=firstchar+otherchar
// console.log(titled)
// document.write(`User input: ${userInput}<br /> Title case: ${userInput}`)

// Qno:12 Write a program that converts the variable num to string.
// let num = 35.36;
// let str = num.toString();
// let dotNum = str.indexOf(".");
// let result = str.slice(0,dotNum)+str.slice(dotNum+1);
// console.log(result);
// document.write(`Number: ${num}<br /> Result: ${result}`);

// Qno:13 Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For chaacter codes of [@ .
// let userInput=prompt("Enter your number");
// let charcode;
// for(let i=0;i<userInput.length;i++){
//     charcode=userInput.charCodeAt(i)
//     console.log(charcode)
//     if(charcode===33 || charCodeAt===44 || charCodeAt===46 || charCodeAt===64){
//         alert("Please enter your vaild username")

//     }
// }


// Qno:14  You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability. Example:

// let A= ["cake","apple pie","cookie","chips","patties"]
// let userInput=prompt("what do you want eat");
// userInput=userInput.toLowerCase()
// let flag=false
// for(let i=0;i<A.length;i++){
//     if(userInput===A[i]){
//         document.write(`${A[i]} is available at index ${i} in our bakery`)
//         flag=true
//         break;

//     }
// }
//     if(flag==false){
//         document.write(`We are sorry . ${userInput} is not available in our bakery`)
    
//     }

// Qno:15 Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

// let password = prompt("Enter your password");
// let passwordlength = false;
// let passwordchar= false;
// let passwordNum= false
// let firstLetter=true
// // checking for Alphabat
// for(let i=0;i<password.length;i++){
//     let charValue = password[i].charCodeAt()
//     console.log(charValue);

//     // checking for uppercase
//     for(let i=0;i<password.length;i++){
//         if(charValue>=65 && charValue<=90){
//             passwordchar=true;
//             console.log(passwordchar);
            
//         }
//     }
//     // checking for lowercase
//     for(let i=0;i<password.length;i++){
//         if(charValue>=97 && charValue<=122){
//             passwordchar=true;
//             console.log(passwordNum);
//         }
//     }
// }
// //  checking for number
// for(let i=0;i<password.length;i++){
//     let charValue=password[i].charCodeAt(0)
//     if(charValue>=48 && charValue<=57){
//         passwordNum=true;
//         console.log(passwordNum);
//     }
        
//     }
//     // checking for first letter
//     let charValue=password.charCodeAt()
//     for(let i=0;i<password.length;i++){
//      if(charValue>=48 && charValue<=57){
//         passwordlength=false;

//      }
//     }

    
//     // checking for length
//     if(password.length>=6){
//         passwordlength=true;
//     }
//     if(passwordchar===false || passwordNum===false || passwordlength===false || firstLetter===false){
//         alert("Please enter your vaild password")
//     }
//     else{
//         alert("password approved")
//     }


// 


// Qno:16 Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.
// let university = "University of Karachi";
// let arr = university.split("")
// for(let i=0;i<university.length;i++){
//     document.write(`${arr[i]} <br />`)
// }

// Qno:17 Write a program to display the last character of a user input.
// let userInput= "Pakistan";
// let lastWord=userInput.charAt(7)
// console.log(lastWord);
// document.write(`User input: ${userInput} <br /> Last character of input: ${lastWord}`)

// Qno:18 You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.
// let text = "The quick brown fox jumps over the lazy dog"
// text = text.toLowerCase()
// let count = text.match(/the/g)
// let length=count ? count.length : 0;
// document.write(`Text: ${text}<br />There are ${length} Occurrence(s) of word 'the'`)

//                                 END OF THE CHAPTER














