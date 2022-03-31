"use strict"


//To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
//
// Input
// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
//
// Output
// Output will consist of a list of string values (in Haskell: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

function openOrSenior(data) {
    return data.map(function (x){
        if(x[0] >= 55 && x[1] > 7) {
            return "Senior";
        } else {
            return "Open";
        }
    });

}
//openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior'])
//function openOrSenior(data) { return  data.map(x => { if(x[0] >= 55 && x[1] > 7){return "Senior";}else{return "Open";} }); }

console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]));


//from codewars
//Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
//
// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
//
// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

function order(words){
    if(words.length === 0) {
        return "";
    }
    //split the words at the space
    var splitWords = words.split(" ");
    console.log("splitWords= " + splitWords);
    var parsed = parseInt(splitWords, 10);
    console.log(parsed);

}

console.log(order("is2 Thi1s T4est 3a"));
console.log("-------");


//given a triangle of odd numbers, calculate the sum of th numbers in the nth row
function rowSumOddNumbers(n) {
    return n*n*n;
}

//map--the return value of the callback will be the new value of the element
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// var incremented = numbers.map(function(n){
//     return n + 1;
// });
//
// console.log(incremented);

//written as an arrow function:
const incremented = numbers.map(n => n + 1);

console.log(incremented);

//return a new array with the square root of all elements
const numArr = [4, 9, 16, 25];
const sqrootArr = numArr.map(Math.sqrt);
console.log("The Array.map() method creates a new array from the results of calling a function for every element:\n " + sqrootArr);

//use map to make an array of numbers that are doubles of the first array
function doubleNumbers(arr){
    const doubled = arr.map(n => n * 2);
    return doubled;
}
console.log(doubleNumbers([2, 5, 100]));    //4, 10, 200

function doubledNumbers2(arr) {
    const doubled2 = arr.map(function(n){
        return n * 2;
    });
    return doubled2;
}

console.log(doubledNumbers2([2, 5, 100]));     ///4, 10, 200

//using map, take an array of numbers and make them strings
function stringItUp(arr) {
    const stringed = arr.map(n => n.toString());
    return stringed;
}

console.log(stringItUp([3, 6, 101]));  ///["3", "6", "101"]

function stringItUpToo(arr) {
    const stringed2 = arr.map(function(n){
        return n.toString();
    });
    return stringed2;
}

console.log(stringItUpToo([3, 6, 101])); ///["3", "6", "101"]

//given a javascript object of names and ages, return an array of a string of names
function namesOnly(arr){
    const nameOnly = arr.map(n => n.name);
    return nameOnly;
}

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]