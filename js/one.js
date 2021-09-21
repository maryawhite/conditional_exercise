"use strict"

//1-0
let qty = 38;

if (qty > 30 && qty % 5 === 4) {  //% returns the integer remainder of two operands
    console.log("swish");
} else {
    console.log("swoosh");
}

if (qty > 0) {
    console.log("pos");
}

//1-1
let a = "celery";
let b = "SQUASH";

if (a === a.toUpperCase()) {
    console.log("alpha");
}

if (b === b.toUpperCase()){
    console.log("beta");
}

//1-2
let number = 9;

if (number > 4) {
    console.log("ding");
} else if (number % 3 === 0) {  //% returns the integer remainder of two operands
    console.log("dong");
}

//1-3
let z = 12;

if (z > 10) {
    console.log("vroom");
}

if (z % 3 === 0) {
    console.log("skrrt");
}

//2-1
let nonsense = "blog trust fund tattooed williamsburg poke roof party";
let hasOk = nonsense.indexOf("ok") > -1;

if (hasOk) {
    console.log("yeet");            //yeet, bc ok is in poke.
} else if (nonsense.length > 10) {
    console.log("yo");
} else {
    console.log("no");
}

let hasZoo = nonsense.indexOf("zoo") > -1;
let hasFun = nonsense.indexOf("fun") > -1;

if (hasZoo && hasOk) {
    console.log("cool");
} else if (hasOk) {
    console.log("rad");           //rad bc ok is in poke
} else if (hasFun) {
    console.log("dope");
} else {
    console.log("nope");
}

//2-2
let q = 25;
if (q % 3 === 0 && q % 5 === 0) {
    console.log("both");
} else if (q % 3 === 0 || q % 5 == 0) {
    console.log("either");
} else {
    console.log("neither");
}

let r = 9;
if (r % 3 === 0 && r % 5 === 0) {
    console.log("both");
} else if (r % 3 === 0 || r % 5 == 0) {
    console.log("either");
} else {
    console.log("neither")
}

let s = 15;
if (s % 3 === 0 && s % 5 === 0) {
    console.log("both");
} else if (s % 3 === 0 || s % 5 == 0) {
    console.log("either")
} else {
    console.log("neither");
}

//3-0
//The program should print out FOUND if the substring coDe exists in the
// text below. If the coDe does not exist in the text, then the program
// should print NOT FOUND.
let longString = "JNtpAh7HQFG08rYh2Pb3HwOm83rbTomM6LnnjooGcoDeuWkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QLaEjcDGv7dVpFiMGHMaZZVDX34rZPy1EkZNZqlQU0jopLVvLyLESMh9A7gKhqoyMAbgZPpdb0CvniTJPpKYk24mLBeym8rBMW3XBmKk1xIOcJ"
let hasCode = longString.indexOf("coDe") > -1;  //indexOf returns -1 if the string is not found

if(hasCode){
    console.log("found");  //basically we're saying if hasCode is true, console.log found
}

let longStr = "JNtpAh7HQFG08rYh2Pb3HwOm83rbTomM6LnnjooG";
let containsYh = longStr.indexOf("Yh2") > -1;

if(containsYh){
    console.log("it's here");
}

let anotherStr = "nnjooGcoDeuWkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QL";
let doesntCon = anotherStr.indexOf("zebra") > -1;

if(doesntCon){
    console.log("nope");  //this won't print anything, bc it's not true and we didn't give instructions on what to do it if's false
}

let oneMoreStr = "WkuPqXsRlwIDAQABAoGAeQkbPBR5n9y2QL";
let doesntHv = oneMoreStr.indexOf("oxtails") < 1;  // less than 1 bc indexOf returns -1 if the string doesn't contain the thing

if(doesntHv) {
    console.log("your string doesn't contain this string");
}

//The indexOf() method returns the first index at which a
// given element can be found in the array, or -1 if it is not present.

//vowels an consonants from hackerrank
function vowelsAndConsonants(s) {
    const vowels = "aeiou";
    var consonants = "";
    for(var i = 0; i < s.length; i++){
        if (vowels.includes(s[i])){
            console.log(s[i]);       //it will console.log my vowels even though I only return consonants.
        } else {
            consonants += s[i] + '\n';
        }
    }
    return consonants;
}

console.log(vowelsAndConsonants("javascript"));  //a a i j v s c r p t
console.log(vowelsAndConsonants("maryandsarah")); //a a a a m r y s r h

//from eloquent javascript
// Define f to hold a function value
 const f = function(a) {
   return (a + 2);
 };

 console.log(f(2)); //4
console.log(f(6));  //8
console.log(f("10"));  //102 bc it concatenates not adds
console.log(f("tree")); //tree2 bc it concatenates

console.log(Math.min(2, 4) + 100);
// → 102

//from eloquent javascript
//Write a function min that takes two arguments and returns the minimum.

function min (x, y) {
    var minimumValue = Math.min(x, y);
    return minimumValue;
}
console.log(min(10, 2));     //2
console.log(min(1000, 300)); //300
console.log(min(1,-2));     //-2


//from github.com/Hey-Programmers/learn-javascript/tree/master/02_functions/exercises/A_functions_exercise
//Write a function `endsWithT` that accepts a string as an argument. The function should return a
//boolean indicating whether or not the string ends with the character 't'.

function endsWithT(input){
    if(typeof input !== "string"){
        return false;
    }
    if(input.charAt(input.length -1) === "t"){
        return true;
    } else {
        return false;
    }
}
console.log("--ends with T--");
console.log(endsWithT("smart"));   //true
console.log(endsWithT("taco"));    //false
console.log(endsWithT("boomerang"));   //false
console.log(endsWithT("racket"));      //true
console.log(endsWithT(123));           //false
console.log(endsWithT("123"));         //false
console.log(endsWithT("t"));           //true
console.log(endsWithT(false));         //false


//from HeyProgrammers
//Write a function `average` that accepts three numbers as arguments.
// The function should return the average of the three numbers.
function average(a, b, c){
    var result = (parseInt(a) + parseInt(b) + parseInt(c))/3;
    return result;
}
console.log("--average of 3 numbers--");
console.log(average(3, 10, 8));     //7
console.log(average(10, 5, 12));    //9
console.log(average(6, 20, 40));    //22
console.log(average("3", 10, 8));   //7  must use parseInt or it will concatenate the string number
console.log(average("10", "5", "12"));  //9
console.log(average("ten", "five", "twelve"));  //NaN

//from w3resource
//Write a JavaScript function that takes in two parameters, amount and coins,
// and output the coins that would add up to the amount.
//
// Sample function : amountToCoins(46, [25, 10, 5, 2, 1])
// Here 46 is the amount. and 25, 10, 5, 2, 1 are coins.
// Output : 25, 10, 10, 1
function amountToCoins(amount, coins){
    if(amount === 0){
        return [];
    } else {
        if(amount >= coins[0]){
            var left = (amount - coins[0]);
            return [coins[0]].concat(amountToCoins(left, coins));
        } else {
            coins.shift();
            return amountToCoins(amount, coins);
        }
    }
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1])); //[25, 10, 10, 1];

//try to rework below...
// function amountToCoinsBbb(amount){
//     var coins = [25, 10, 5, 2, 1];
//     if(amount === 0){
//         return [];
//     } else {
//         if(amount >= coins[0]){
//             var left = (amount - coins[0]);
//             return [coins[0]].concat(amountToCoinsBbb(left));
//         } else {
//             coins.shift();
//             return amountToCoinsBbb(amount);
//         }
//     }
// }
// console.log(amountToCoinsBbb(46));


//in class warm up 9-21-21
//write a function logEvens that will accept a number parameter as an argument--that number will indicate
// the amount of times to print out all even numbers up to the argument provided. 10 should show 2, 4, 6, 8, 10
function logEvens(input){
    for(var i = 1; i <= input; i++){
        if(i % 2 === 0){
            console.log(i);
        }
    }
}
console.log(logEvens(10));
console.log(logEvens(16));
