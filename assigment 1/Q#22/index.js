"use strict";
/*Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.*/
Object.defineProperty(exports, "__esModule", { value: true });
// funcation to create a fruits
function createFruit(name, color, taste) {
    return {
        name,
        color,
        taste,
    };
}
// create an array of fruits
const fruits = createFruit("apple", "red", "sweet");
createFruit("banana", "yellow", "sweet");
createFruit("orange", "orange", "citrusy");
createFruit("grapes", "purple/green", "sweet");
createFruit("strawberry", "red", "sweet");
//access an invalid index
const invalidIndex = 10; // there are only 5 element in the array, so  this will cause an error
console.log(`fruit at index ${invalidIndex};`, fruits[invalidIndex]);
// print the fruits
fruits.forEach((fruit) => {
    console.log(`name : ${fruit.name}, color : ${fruit.name}, taste: ${fruit.name}`);
});
