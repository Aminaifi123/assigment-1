/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

// • Tests for equality and inequality with strings
 const str1 : string ="hello";
 const str2 : string ="hello";
 console.log(str1 === str2);// fasle
 console.log(str1 !== str2); // true

//• Tests using the lower case function
const text1 : string = "hello amina"
const text2 : string = "hello amina"
console.log(text1.toLowerCase()=== text2); // true

//• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
const num1: number = 10;
const num2: number = 5;

console.log(num1 === num2); // fasle
console.log(num1 !== num2); // true
console.log(num1 > num2); // true
console.log(num1 < num2); // fasle
console.log(num1 >= num2); // true
console.log(num1 <= num2); // fasle

//• Tests using "and" and "or" operators
const x : number = 5;
const y : number = 10;
const z : number = 15;

console.log(x < y && y > z);// true, both
//condition are true
console.log(x < y|| y > z);// true, atleast one
// condition are true
console.log(x > y && y < z);// fasle, both
// condition are fasle
console.log(x < y || y > x); // fasle, both
// condition are fasle 

//• Test whether an item is in a array
const fruits : string[] = ['apple','banana','orange','grape'];

console.log(fruits.includes('banana')); // true
console.log(fruits.includes('mango')); // fasle

//• Test whether an item is not in a array*/
const colors: string[] =['red','green','blue','yellow'];

console.log(!colors.includes('purple'));// true
console.log(!colors.includes('green'));// fasle















