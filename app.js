//Qno:1 Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// let firstName =prompt("ENTER YOUR FIRST NAME");
// let lastName= prompt("ENTER YOUR LAST NAME");
// let fullName=firstName+lastName;
// alert(`${fullName}`);

// Qno:2
// let myFavoritePhone=" Samsung Galaxy S6 Edge Plus"
// console.log(myFavoritePhone.length)
// document.write(`My Favorite Mobile Phone is: ${myFavoritePhone}<br />`)
// document.write(`Length  of String: ${myFavoritePhone.length}`);

// Qno:3
// let countryName= "Pakistani"
// console.log(countryName.indexOf("n"));
// document.write(`String:${countryName}<br />`)
// document.write(`Index of 'n': ${countryName.indexOf("n")}`)

// Qno:4
// let wordName="Hello World"
// console.log(wordName.lastIndexOf("l"));
// document.write(`String: ${wordName}<br />`);
// document.write(`Last Index of 'l': ${wordName.lastIndexOf("l")} `);

// Qno:5
// let character="Pakistani"
// console.log(character.slice(3,4));
// document.write(`String:${character}<br />`);
// document.write(`Character at Index ${character.indexOf("i")}:${character.slice(3,4)}`);

// Qno:6
// let firstName =prompt("ENTER YOUR FIRST NAME");
// let lastName= prompt("ENTER YOUR LAST NAME");
// alert("Hello " + firstName.concat(lastName))

// // Qno:7
// let city = "Hyderabad";
// let replacement=city.replace("Hyder","Islam")
//  document.write(`City: ${city} <br /> After replacement: ${replacement}`)

// Qno:8
// let message ="Ali and sami are best friends.They play cricket and football together."
// let replace = message.replace(/and/g," & ")
// document.write(`Message: ${message}<br /> After replacement: ${replace}`)

// Qno: 9
// let StringNumber ="472";
// console.log(typeof(StringNumber))
// let number =+StringNumber 
// console.log(number)
// console.log(typeof(number))
// document.write(`Value:${StringNumber}<br />Type:${typeof(StringNumber)}<br />Value: ${number}<br />Type: ${typeof(number)}`)

// Qno:10
// let userInput=prompt("Enter your word");
// console.log(userInput.toUpperCase(userInput))
// document.write(`User input: ${userInput}<br />Upper case: ${userInput.toUpperCase(userInput)}`);

// Qno:11
// let userInput=prompt("Enter your word");
// let firstchar=userInput.slice(0,1)
// firstchar=firstchar.toUpperCase()
// let otherchar= userInput.slice(1)
// otherchar=otherchar.toLowerCase()
// let titled=firstchar+otherchar
// console.log(titled)
// document.write(`User input: ${userInput}<br /> Title case: ${userInput}`)

// Qno:12
// let num = 35.36;
// let str = num.toString();
// let dotNum = str.indexOf(".");
// let result = str.slice(0,dotNum)+str.slice(dotNum+1);
// console.log(result);
// document.write(`Number: ${num}<br /> Result: ${result}`);

// Qno:13
// let userInput=prompt("Enter your number");
// let charcode;
// for(let i=0;i<userInput.length;i++){
//     charcode=userInput.charCodeAt(i)
//     console.log(charcode)
//     if(charcode===33 || charCodeAt===44 || charCodeAt===46 || charCodeAt===64){
//         alert("Please enter your vaild username")

//     }
// }


// Qno:14
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

// Qno:15
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


// Qno:16
// let university = "University of Karachi";
// let arr = university.split("")
// for(let i=0;i<university.length;i++){
//     document.write(`${arr[i]} <br />`)
// }

// Qno:17
// let userInput= "Pakistan";
// let lastWord=userInput.charAt(7)
// console.log(lastWord);
// document.write(`User input: ${userInput} <br /> Last character of input: ${lastWord}`)

// Qno:18
// let text = "The quick brown fox jumps over the lazy dog"
// text = text.toLowerCase()
// let count = text.match(/the/g)
// let length=count ? count.length : 0;
// document.write(`Text: ${text}<br />There are ${length} Occurrence(s) of word 'the'`)
















