"use strict";
let favoriteTransportation = [];
favoriteTransportation.push(["motercycle", "honda"]);
favoriteTransportation.push(["car", "civic"]);
favoriteTransportation.push(["bicycle", "trek"]);
//console.log(favoriteTransportation)
// i would like to own a honda motercycle
// using for each loop to print a series of statements
favoriteTransportation.forEach(([transport, brand]) => {
    console.log(`i would like to own a ${brand}
     ${transport}`);
});
