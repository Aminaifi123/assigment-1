/*Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner.*/


//step 3. • Print a second set of invitation messages
console.log("second set of invitation messages:");
guestList.forEach((guest) => {
    console.log(`dear ${guest}, you are invited to dinner.`);
})
export{guestList}