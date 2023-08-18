/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.*/


let guestList: Array<string> =[
    "khawaja nizamudin",
    "Iskinder mirza",
    "liaqat ali khan",
    "ali shah",
    "mahira khan",
    "samar jafri",
];

// loop for each to print invitation

guestList.forEach((geustname) =>
 {
    console.log(`dear ${geustname},you are invited to dinner please join us.` )
});