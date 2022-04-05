"use strict"

//convert feet to inches
//given a whole number of feet convert it to inches
//1 foot is 12 inches
function convertFttoIn(input){
    let result = input * 12;
    console.log(input + " feet is " + result + " inches");
    return result;
}

convertFttoIn(3);  ///36
convertFttoIn(3.5);  //42
convertFttoIn(3.1);  //37.2
convertFttoIn(8);  //96


//convert cubic inches to cubic foot
//1 cubic foot is 1728 cubic inches
//given a length, width, and depth, in inches, convert it to cubic feet
function convertToCubicFt(l, w, d) {
    //calculate cubic inches
    let cubicIn = l * w * d;

    //divide by 1728
    let cubicFt = cubicIn / 1728;
    console.log(cubicIn + " cubic inches equals " + cubicFt + " cubic feet");
    return cubicFt;
}

convertToCubicFt(60, 96, 20);  //66.66666666666667
convertToCubicFt(62, 72, 24);  //62

//write a function to calculate the density of the shipment, given the parameters lbs and cubic inches
//weight in pounds / volume in cubic feet = xx pounds per cubic foot
function calculateDensity(lbs, cubicIn){
    //first convert cubic inches to cubic feet
    let cubicFt = cubicIn / 1728;
    //density is weight divided by cubic feet
    let answer = lbs / cubicFt;
    console.log("the density of the shipment is " + lbs + " / " + cubicFt + " = " + answer + " lbs/ft^3");
}

calculateDensity(150, 115200);  ///2.25 lbs/ft^3
calculateDensity(150, 107136);  //2.4193548387096775 lbs/ft^3

//how would we round to 2 decimal places?
//maybe use toFixed() method

//bom
console.log("paragraph inner Width: " + window.innerWidth);
console.log("protocol: " + window.location.protocol);

//dom
let myParagraph = document.getElementById("domquiz");
myParagraph.style.color = "blue";
