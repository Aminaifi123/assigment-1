"use strict";
let personName = "amina iftikhar ahmad";
// 1st step show in lowercase

let lowercaseName = personName.toLowerCase();
console.log(lowercaseName);


// 2nd step show in uppercase

let uppercaseName = personName.toUpperCase();
console.log(uppercaseName);

//3rd step show in titlecase

let words = personName.split("");
let titlecaseName = "";

for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(i).toLowerCase() + " ";
}
;
console.log(titlecaseName)