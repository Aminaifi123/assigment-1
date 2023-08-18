/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.*/


let personName:string = "amina iftikhar ahmad";

// 1st step show in lowercase

let lowercaseName :string = personName.toLowerCase();
console.log(lowercaseName);

// 2nd step show in uppercase

let uppercaseName : string= personName.toUpperCase();
console.log(uppercaseName);

//3rd step show in titlecase

let words: string[]= personName.split("");

let titlecaseName : string= ""
for (let i = 0 ; i < words.length; i++) { 
  titlecaseName += words[i].charAt(0).toUpperCase()+words[i].slice(i).toLowerCase()+" "
};
console.log(titlecaseName)