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