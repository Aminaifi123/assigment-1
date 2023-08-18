"use strict";
/*More Guests: You just found a bigger dinner table, so now more space is available. Think of
three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing
 people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
 Print a new set of invitation messages, one for each person in your list.*/
let guestList= [
    "khawaja nizamudin",
    "Iskinder mirza",
    "liaqat ali khan",
];
//execrise 16
// step 1.informing people that you found a bigger dinner table.
for (let guest of guestList) {
    console.log(`hello,${guest}, we found a bigger dinner table`);
}
//step 2 add a new guest to the beginning of array.
let newGuestAtBeginning = "ali shah";
guestList.unshift(newGuestAtBeginning);
console.log(guestList);
// 3rd step add one guest to the middle of array
let newGuestInMiddle = "rana waqar";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
console.log(guestList);
// 4th step use append()to add new guest to the end of your list 
let newGuestAtEnd = "samar abas";
guestList.push(newGuestAtEnd);
console.log(guestList);
// final step print a new set of invitation messages
console.log("New set of invitation messages:");
for (let guest of guestList) {
    console.log(`dear ${guest}, you are invited to dinner`);
}
