"use strict"

//Add all numbers
//return the sum of all parameters entered regardless of the amount of numbers --NO Arrays
//ex. addAll(2,5,6,7) ---> 20

//using the arguments object and a for loop
function addAll(){
    var args = Array.prototype.slice.call(arguments);
    var total = 0;
    for(let i = 0; i < args.length; i++){
        total += args[i];
    }
    return total;
}

console.log(addAll(2, 5, 6, 7));  //20
console.log("-----------------");

//solution 2 with spread operator ...rest, and forEach
function addAllSpread(...numbers) {
    let total = 0;
    numbers.forEach(function(num){
        total += num;
    });
    return total;
}
console.log(addAllSpread(2, 5, 6, 7));  //20
console.log("-----------------");

//solution 2.1 with spread operator and reduce
//reduce takes in a call back function with an accumulator and current value
//the acc starts at 0 and for each iteration, add the current value
function addAllReduce(...numbers) {
    return numbers.reduce((acc, cur) => acc + cur);
}
console.log(addAllReduce(2, 5, 6, 7));  //20
console.log("-----------------");

//sum all primes
//pass in a number to loop up to and add all of the prime numbers.
// a prime number is a number greater than one whose only factors are 1 and itself
//ex sumAllPrimes(10) --> 17

function sumAllPrimes(num){
    let total = 0;
    //helper function
    function checkForPrime(i) {
        for(let j = 2; j < i; j++) {
            if(i % j === 0) {
                return false;
            }
        }
        return true;
    }
    for(let i = 2; i <= num; i++) {
        if(checkForPrime(i)){
            total += i;
        }
    }
    return total;
}

console.log(sumAllPrimes(10));
console.log("-----------------");

//seek and destroy
//remove from the array whatever is in the following arguments. Return the leftover numbers
//in an array
// ex seeAndDestroy([2,3,4,6,6, 'hello'], 2, 6) ---> [3,4,'hello']

//solution 1 using arguments, indexOf and filter
function seekAndDestroy(arr) {
    //Array.from is from ES6
    const args = Array.from(arguments);

    //helper function return true if it's not in the array
    function filterArr(arr){
        return args.indexOf(arr) === -1;
    }
    return arr.filter(filterArr);
}

console.log(seekAndDestroy([2,3,4,6,6, 'hello'], 2, 6));  //should return [3,4,'hello']
console.log("-----------------");

//solution 2 using ...rest, filter, and includes
function seekAndDestroyRest(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

console.log(seekAndDestroyRest([2, 3, 4, 6, 6, 'hello'], 2, 6));
console.log("-----------------");

//sort by height
//some people are standing in a park. There are trees between them which cannot
// be moved. Your task is to rearrange the people by height in a non-descending order
// without moving the trees
//the trees are denoted by -1 in the array. The trees must hold their position
//ex. [-1, 150, 190, 170, -1, -1, 160, 180] should return [-1, 150, 160, 170, -1, -1, 180, 190]
function sortByHeight(a) {
    const arr1 = [];
    const arr2 = [];

    a.forEach(function(val, index){
        if(val === -1){
            arr1.push(index);
        } else {
            arr2.push(val)
        }
    });
    const sortArr = arr2.sort((a, b) => a - b);

    arr1.forEach(function (val, index){
        return sortArr.splice(arr1[index], 0, -1)
    });

    return sortArr;
}

console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));
console.log("-----------------");

//missing letters
//find the missing letters in the passed letter range and return it.
//if all letters are present, return undefined
//ex missingLetters("abce") ---> "d"

//solution using the charCodeAt method
function missingLetters(str) {
    //get the code of the first character
    let compare = str.charCodeAt(0);
    let missing;

    //split the string into an array
    str.split("").map((char, i) => {
          if(str.charCodeAt(i) == compare) {
              ++compare;
          } else{
              missing = String.fromCharCode(compare);
          }
    });
    return missing;
}

console.log(missingLetters("abce"));   //d
console.log(missingLetters("defghiklmn"));  //k
console.log("-----------------");


//even and odd sums
//take in an array and return an array of the sums of the even and odd numbers
//ex evenOddSums([50, 60, 60, 45, 71]) ---> [170, 116]

//using forEach and a ternary
function evenOddSums(arr) {
    let evenSum = 0;
    let oddSum = 0;

    arr.forEach(num => (num % 2 === 0 ? (evenSum += num) : (oddSum += num)));

    return [evenSum, oddSum];
}

console.log(evenOddSums([50, 60, 60, 45, 71]));







