"use strict"

//reverse a string
//example 'hello' --> 'olleh'

function reverseString(str) {
    //split it into an array, reverse, then join back to string
    return str.split("").reverse().join("");
}

console.log("Write a function to reverse a string")
console.log(reverseString("hello"));
console.log(reverseString("reverse"));


function reverseStringLoop(str) {
    let reverseStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        reverseStr = reverseStr + str[i];
    }
    return reverseStr;
}

console.log("Write a function, using a decrementing loop, to reverse a string")
console.log(reverseStringLoop("mary"));

function reverseStringIncrLoop(str) {
    let reverseStr = "";
    for(let i = 0; i <= str.length - 1; i++) {
        reverseStr = str[i] + reverseStr;
        // console.log("reverseStr: " + reverseStr);
        //note that the order here matters, str[i] + reverseStr is not the same as reverseStr + str[i]
    }
    return reverseStr;
}

console.log("Write a function, using an incrementing loop, to reverse a string")
console.log(reverseStringIncrLoop("increment"));

function reverseStringForOf(str) {
    let reverseStr = "";
    for(let char of str) {
        reverseStr = char + reverseStr;
    }
    return reverseStr;
}

console.log("reverse a string using a for of loop");
console.log(reverseStringForOf("forOfLoop"));

//use a forEach loop to reverse a string
function reverseStrForEach(input){
    let revStr = "";
    input.split("").forEach((char) => revStr = char + revStr);

    return revStr;
}

console.log("use forEach to reverse a string");
console.log(reverseStrForEach("forEach"));

function reverseStringReduce(input) {
    return input.split("").reduce(function(revString, char){
        return char + revString;
    }, "");
}

console.log("use reduce to reverse a string");
console.log(reverseStringReduce("reduce"));
console.log("----------------------------------");

//write a function to check if a string is a palindrome

function checkForPalindrome(input) {
    //use one of the reverse functions that we already created
    let reversed = reverseString(input);
    if(input === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log("return true if the word is a palindrome")
console.log(checkForPalindrome("madam"));   //true
console.log(checkForPalindrome("racecar"));  //true
console.log(checkForPalindrome("nurse"));   //false

//reverse an integer
// 521 --> 125
//if it's negative, make sure the answer returns the negative sign
function reverseInt (int) {
    const revString = int.toString().split("").reverse().join("");
    return parseInt(revString) * Math.sign(int);
}

console.log("reverse an integer");
console.log(reverseInt(1052));  //2501
console.log(reverseInt(-1052));  //-2501

//capitalize letters
//pass in a sentence and return it with the first letter of each word capitalized

//using slice and a for loop
function capitalizedLetters(sentence) {
    console.log("original sentence: " + sentence);
    //maybe split it at each space and then capitalize the char at 0
    let newSent = sentence.split(" ");
    console.log(newSent);
    let newString = "";
    for(let i = 0; i < newSent.length; i++) {
        let firstLetter = newSent[i].slice(0,1);
        let remaining = newSent[i].slice(1);
        newString += firstLetter.toUpperCase() + remaining + " ";
    }
    return newString;
}

console.log(capitalizedLetters("mary had an"));
console.log("---------------------------------------")

//using a for loop and substring
function capitalizeFirstLetter(input) {
    //given an input, capitalize the first letter of the name
    var firstLetter = input.slice(0, 1);
    var remaining = input.slice(1);
    return firstLetter.toUpperCase() + remaining;
}

function capitalizeLettersForLoop (str) {
    const strArr = str.toLowerCase().split(" ");  //make sure you split with a space, so we separate the words, not the characters

    for(let i = 0; i < strArr.length; i++) {
        strArr[i] = strArr[i].substring(0,1).toUpperCase() + strArr[i].substring(1);
    }
    return strArr.join(" ");
}

console.log(capitalizeLettersForLoop("i love mary"));
console.log("---------------------------------");

//capitalize the first letter of each word using the map function
function capitalizeLettersMap(str) {
    return str.toLowerCase().split(" ").map(function(word, index){
        return word[0].toUpperCase() + word.substring(1);
    })
        .join(" ");
}

console.log(capitalizeLettersMap("i love map functions"));
console.log("--------------------------------");


//using a regular expression
function capitalizeLetterRegEx(str) {
    return str.replace(/\b[a-z]/gi, function(char){
        return char.toUpperCase();
    });   //g is global, i is case-insensitive
}

console.log(capitalizeLetterRegEx("this uses a regex"));
console.log("------------------------")


//max character
//return a character that is most common in a string
//i.e. max character in javascript is a
function maxCharacter(str) {
    const charMap = {};
    let maxNum = 0;
    let maxChar = "";
    str.split("").forEach(function(char){
        if(charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;  //this line accounts for the very first letter
        }
    });
    // console.log(charMap);  //we don't want to return the charMap, we need to figure out which one is the highest
    for(let char in charMap) {
        if(charMap[char] > maxNum) {
            maxNum = charMap[char];
            maxChar = char;
        }
    }
    return maxChar;
}

console.log("Most common char in javascript is: " + maxCharacter("javascript"));
console.log("Most common char in abbccdddd is: " + maxCharacter("abbccdddd"));
console.log("------------------------------");

//fizzbuzz
//write a program that prints all the numbers from 1 to 50. For multiples of 3, print Fizz, for multiples of 5 print Buzz
// and for multiples of 3 & 5 print FizzBuzz
//use console.log to print the numbers, (rather than a return)
function fizzBuzz() {
    for(let i = 1; i <= 50; i++) {
        if(i % 15 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");;
        } else if (i % 5 === 0) {
            console.log("Buzz");;
        } else {
            console.log(i);;
        }
    }
}

fizzBuzz();
console.log("--------------");




