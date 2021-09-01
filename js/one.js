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