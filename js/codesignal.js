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
    let parsed = parseInt(words, 10);
    console.log(parsed);

}

console.log(order("is2 Thi1s T4est 3a"));
console.log("-------");


//given a triangle of odd numbers, calculate the sum of th numbers in the nth row
function rowSumOddNumbers(n) {
    return n*n*n;
}

