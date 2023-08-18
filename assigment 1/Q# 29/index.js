"use strict";
/*Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!*/
// define the array of fruits
const favorite_fruits = ["apple", "banana", "orange"];
//syntex: arrayName.includes("elements")
//check for specific fruits using independent if statments
let a = favorite_fruits.includes("mango");
console.log(a);
if (favorite_fruits.includes("apple")) {
    console.log("i like apple!");
}
if (favorite_fruits.includes("bananas")) {
    console.log("I enjoy bananas!");
}
if (favorite_fruits.includes("orange")) {
    console.log("oranges are delicious");
}
if (favorite_fruits.includes("grape")) {
    console.log("grape are tasty");
}
