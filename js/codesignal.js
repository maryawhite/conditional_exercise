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

//reverse a given string
//convert it to an array (split). reverse it then join it again.
function reverseString(input) {
    var splitInput = input.split("").reverse().join("");
    return splitInput;
}

console.log(reverseString("Mary"));

//from codility
//A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.
//
// For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.
//
// Write a function:
//
// function solution(N);
//
// that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.
//
// For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.
//
// Write an efficient algorithm for the following assumptions:
//
// N is an integer within the range [1..2,147,483,647].

//start by converting the input to a number using parseInt, then convert the number to binary, then figure out how to find the sections that contain 0s, maybe use indexOf to find the first one
// //then slice it out.
// //this only works for small numbers, need to refactor
// function findBinaryGap(n) {
//     var parseN = parseInt(n)
//     var toBinary = parseN.toString(2);
//     console.log("Binary Number: " + toBinary);
//     //split it into an array so we can ues indexOf
//     var myArray = toBinary.split("");
//     console.log(myArray);
//     var firstOne = myArray.indexOf("1");
//     //if indexOf returns -1, it means it doesn't exist
//     //now create a new array using slice to get rid of the first one
//     if(firstOne > -1) {
//         var newArraySliced = myArray.slice(firstOne + 1);
//         console.log(newArraySliced);
//         //now find the second 1
//         var secondOne = newArraySliced.indexOf("1");
//         //the index number of this new array (001, not the original array 1001) will correspond with the number of 0s.  001, the index of the first 1 is 0, the index of the 2nd 1 is 2
//         //we need to store this value
//         var gaps = [];
//         if(secondOne > 0) {
//             gaps.push(secondOne);
//             //now get the largest gap
//             return Math.max.apply(Math, gaps);
//         } else {
//             var anotherSlice = myArray.slice(secondOne + 1);
//             console.log(anotherSlice);
//             var thirdOne = anotherSlice.indexOf("1");
//             gaps.push(thirdOne);
//             return Math.max.apply(Math, gaps);
//
//         }
//
//
//     } else {
//         return 0;
//     }
// }

//https://codingwithmanny.medium.com/how-to-solve-binary-gap-cda3c3e980b8

function getGaps (BinaryArray, gaps) {
    // finding the first one via its index
    const firstOne = BinaryArray.indexOf("1");
    if (firstOne > -1) {
        // new array created taking a slice of original array
        // from the index of the firstOne + 1 index
        let NewBinaryArray = BinaryArray.slice(firstOne + 1);
        console.log(NewBinaryArray);
        // finding second one via its index in new array slice
        const secondOne = NewBinaryArray.indexOf("1");
        // accounting for no zeros
        if (secondOne > 0) {
            // adding 2 to our gaps array
            gaps.push(secondOne);
        }

        // Pass array minus second one and gaps array
        return getGaps(NewBinaryArray.slice(secondOne +1), gaps);
    }

    // if gaps array length is empty return 0
    // otherwise return largest value in array
    if(gaps.length > 0) {
        return Math.max.apply(Math, gaps);
    } else {
        return 0;
    }
}
// our function
function findBinaryGap (n) {

    // Tests if our value is an integer
    // Tests if N is within range
    if (n === parseInt(n, 10) && n >= 1 && n <= 2147483647) {
        // Convert to binary and split into an array
        var parseN = parseInt(n);
        var binary = parseN.toString(2).split("");
        console.log("binary number as Array: " + binary);

        // calling our recursive function with initial empty gaps
        return getGaps(binary, []);
    }

    // default if it doesn't meet the requirements
    return 0;
}

console.log("find Binary Gap: ");
console.log(findBinaryGap(9));  //2
console.log(findBinaryGap(529));  //4
console.log(findBinaryGap(100));  //2  //this one doesn't work correctly
console.log(findBinaryGap(15));  //0
console.log(findBinaryGap(51272));  //4

function fibonacciGenerator(n) {
    var output = [];

    if(n === 1){
        output = [0];
    } else if (n === 2) {
        output = [0, 1];
    } else {
        output = [0, 1];

        for(var i = 2; i < n; i++) {
            //the nth Fibonacci number is the summation of n-1 and n-2 term.
            output.push(output[output.length - 2] + output[output.length - 1]);
        }
    }
    return output;
}

console.log("fibonacci ");
console.log(fibonacciGenerator(1)); //[0]
console.log(fibonacciGenerator(2));  //[0, 1]
console.log(fibonacciGenerator(3));  //[0, 1, 1]
console.log(fibonacciGenerator(4));  //[0, 1, 1, 2]
