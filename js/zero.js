"use strict"
//0-1 Predict what the code below will print out.
if (true) {
    console.log("foo");
}

if (false) {
    console.log("bar");
}

//0-2
if (false || false) {
    console.log("boop");
}
if (true || false) {
    console.log("beep");
}

//0-3
let num = 40;

if (num > 0) {
    console.log("zip");
}
if (num % 2 === 0) {
    console.log("zoop");
}

//0-4
let word = "jeep";

if (word[0] === "d"){
    console.log("yer");
} else {
    console.log("nah");
}

//0-5
let sentence = "roger that";

if (sentence[sentence.length -1] === "t"){
    console.log("ends in t");
} else {
    console.log("does not end in t");
}

if (sentence.length <= 4) {
    console.log("short");
} else {
    console.log("long");
}


