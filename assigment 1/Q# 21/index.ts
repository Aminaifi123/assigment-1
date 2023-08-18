//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

const bouquet =

{   
   name: "spring delight",
   price: 250,
   description: "beautiful arrangment of spring flowers"
}

// define an array of object

let bouquets : Array<typeof bouquet>=[];
// pushing multipul object

bouquets.push (bouquet);
bouquets.push ({ 
    name :"summer bliss", 
price: 350,
description: "beautiful arrangment of summer flowers"})

let bouquet3 =
   {  
      name:"Red hot",
      price:350,
      description:"beautiful arrangement of red roses"
}

bouquets.push(bouquet3);

console.log(bouquets);

bouquets.push({ name:"freshness",price:250, description:"A beautiful arrangement of white and blue roses"})

console.log(bouquets);
// funcation to display bouquets

funcation displayBouquets (bouquets: Array<typeof bouquet>)
{ 
   for (let i of bouquets) {
      console.log(`
      title: ${i.name}
      description${i.description}
      price: ${i.price}
      _______________/n`);
   }
}

displayBouquets(bouquets);