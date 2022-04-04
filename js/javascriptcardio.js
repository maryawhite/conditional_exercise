"use strict"
//practice problems from Traversy Media

//return the longest word from a string
//if there's a tie, put it into an array
//ex. "Hello, my name is Mary" --> hello

function longestWord(sent) {
    //create filtered Array
    const wordArray = sent.toLowerCase().match(/[a-z0-9]+/g);
    // console.log(wordArray);
    //now sort by length using the comparator function
    const sorted = wordArray.sort(function(a, b){
        return b.length - a.length;
    });
    // console.log(sorted);
    //now that it's sorted you can return the first item in the array,
    //but we need to check for a tie
    //filter returns true or false
    const longestWordArr = sorted.filter(function (word){
        return word.length === sorted[0].length;
    });
    // console.log(longestWordArr);
    //now check if more than one array value
    if(longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}

console.log(longestWord("hello, there, my name is Mary"));
console.log(longestWord("one four hundred"));
console.log("----------------------------------");

//Array Chunking
//split an array into chunked arrays of a specific length
//ex: ([1,2,3,4,5,6,7,], 3) === [[1,2,3],[4,5,6,],[7]]

function chunkArray(arr, len) {
    //init a chunked array
    const chunkedArr = [];
    let i = 0;
    //loop while index is less than array length
    while(i < arr.length) {
        //slice out from the index to the index + the len and push to the new array
        //then incre by chunk length
        chunkedArr.push(arr.slice(i, i + len));
        i += len;
    }
    return chunkedArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 3));
console.log("--------------------------------");

function chunkArrayForEach(arr, len){
    //init an array and then use a forEach loop to iterate through it
    const chunkedArr = [];
    arr.forEach(function(val){
        const last = chunkedArr[chunkedArr.length - 1];  //get the last value

        //check to see if there is a last and if last length is equal to the len
        if(!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
        console.log("chunkedArr: " + chunkedArr);
    });
    return chunkedArr;
}

console.log(chunkArrayForEach([2, 4, 6, 8, 10, 12, 14, 16, 18], 3));
console.log("-----------------------------");

//flatten array
function flattenArray(arrays) {
    return arrays.reduce(function(a, b) {
        return a.concat(b);
    });
}

console.log(flattenArray([[2, 4, 6,], [8, 10, 12], [14, 16, 18]]));
console.log("-----------------------------");

//flatten array solution 2
function flattenArrayApply(arrays) {
    return [].concat.apply([], arrays);
}

console.log(flattenArrayApply([[1, 2, 3], [4, 5, 6], [7, 8]]));
console.log("-----------------------------");

//flatten array solution 3
//same as solution 2, except use the spread operator instead of apply
function flattenArraySpread(arrays) {
    return [].concat(...arrays);
}

console.log(flattenArraySpread([[1, 2, 3], [4, 5, 6], [7, 8]]));
console.log("-----------------------------");

//anagram
//take out punctuation and change to lowercase

//helper function for anagram, this will put the word in order a-z
function formatStr(str) {
    return str
        .replace(/[^\w]/g, "")
        .toLowerCase()
        .split("")
        .sort()
        .join("")
}

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

console.log(isAnagram("below", "elbow"));
console.log(isAnagram("tar", "rat"));
console.log(isAnagram("dormitory", "dirty room"));


// letter changes
// change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A
// ex hello there ---> ifmmp uifsf

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, function(char){
        if(char === "z" || char === "Z") {
            return "a";
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });
    newStr = newStr.replace(/a|e|i|o|u/gi, function(vowel){
        return vowel.toUpperCase();
    });
    return newStr;
}

console.log(letterChanges("hello there"));
console.log(letterChanges("zebra stripes"));


