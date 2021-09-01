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
