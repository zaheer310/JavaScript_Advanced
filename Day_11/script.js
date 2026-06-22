// // Notes Day 11

// // Manipulating Attributes
// // methods : getAttributes(attr) , setAttribute(attr,value)

// // Example 1: Get the ID of an Element

// let solarImg = document.querySelector(`img`);
// let idName = solarImg.getAttribute(`id`);
// console.log(idName);

// // Example 2: Change The ID
// let solarImg = document.querySelector(`img`);
// solarImg.setAttribute(`id`, `galaxyImg`);
// console.log(solarImg);

// // Example 3: Change the image Source
// let solarImg = document.querySelector(`img`);
// solarImg.setAttribute(
//   `src`,
//   `https://aws.cricketmedia.com/media/20151007132801/Mars-Shutterstock-scaled.jpg`,
// );

// // Example 4: Get and Change a link's href
// let link = document.querySelector(`a`);
// console.log(link.getAttribute(`href`)); // current
// link.setAttribute(`href`, `https://www.google.com/`);
// console.log(link.getAttribute(`href`));

// Example 5 : Check if Attribute Exists
let heading = document.querySelector(`h1`);
let headId = heading.getAttribute(`id`);
console.log(headId);


// Manipulating Style(Inline)
// Example 1: Changing text color
let headig