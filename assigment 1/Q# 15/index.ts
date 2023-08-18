/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitmessagesation , one for each person who is still in your list.*/

let guestList = [
    "khawaja nizamudin",
    "Iskinder mirza",
    "liaqat ali khan",
];

//STEP 1. print the name of person who can't make it.
 let guestHowCanMakeIt: string ="liaqat ali khan"
console.log(`${guestHowCanMakeIt} CAN'T MAKE IT TO DINNER`)


 // step 2. replace the name of guest who can't make it

 let NewGuest: string ="Iskidar Mirza"
 let indexOfguestHowCanMakeIt: Number = guestList.indexOf (guestHowCanMakeIt)

 console.log(indexOfguestHowCanMakeIt)

// step 3. • Print a second set of invitation messages
console.log("second set of invitation messages:")
guestList.forEach((guest:string) =>
{
     console.log(`dear ${guest}, you are invited to dinner.`)
})