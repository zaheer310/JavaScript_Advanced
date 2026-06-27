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

// // Example 5 : Check if Attribute Exists
// let heading = document.querySelector(`h1`);
// let headId = heading.getAttribute(`id`);
// console.log(headId);




// // Manipulating Style(Inline)


// // Example 1: Changing text color
// let heading = document.querySelector(`#heading1`);
// heading.style.color = `Black`;


// // Example 2: Change background color(camalCase!)
// let heading1 = document.querySelector(`h1`);
// heading1.style.backgroundColor = `orange`;


// // Example 3: Change image Size
// let mainImg = document.querySelector(`#mainImg`);
// mainImg.style.width = `500px`;


// // Example 4: Hide an Element

// let box = document.querySelector(`.box`);
// box.style.display = `none`;




// // The classList property

// // Example 1: Add a Class

// let para = document.querySelector(`p`);
// para.classList.add(`green`);
// console.log(document.querySelector(`.green`));

// // Example 2: Remove a Class
// let para = document.querySelector(`p`);
// para.classList.remove(`.green`);
// console.log(para.classList.contains(`.green`));


// //  Example 3: Checks If Class Exists
// let para = document.querySelector(`p`);
// console.log(para.classList.contains(`.green`));

// // Example 4: Toggle A Class
// let para = document.querySelector(`p`);
// console.log(para.classList.toggle(`.green`));


// // Example 5: Toggle on Button Click

// let button = document.querySelector(`button`);

// button.addEventListener(`click`, ()=>{
//     button.classList.toggle(`.green`)
// })



// 4.Navigation (DOM Traversal)

// // Example 1: Find all children of an Element
// let box = document.querySelector(`.box`);
// let boxChildren = box.children

// console.log(boxChildren);


// // Example 2: Navigate from child to parent
// let list = document.querySelector(`ul`);
// console.log(list.parentElement);


// // Example 3: Get the next sibling
// let list = document.querySelector('ul');
// let firstItem = list.children[0]; // First <li>
// let secondItem = firstItem.nextElementSibling; // Second <li>
// console.log(secondItem.innerText); // "Location: Milky Way Galaxy"


// Example 4: Access first and last child
// let box = document.querySelector('.box');
// console.log(box.children[0]); // First child (h4)
// console.log(box.children[box.children.length - 1]); // Last child (ul)


// // Example 5: Navigate through multiple siblings
// let h1 = document.querySelector(`h1`);
// let nextEl = h1.nextElementSibling;
// let afterThat = nextEl.nextElementSibling;
// let img = afterThat.nextElementSibling// img
// let h2 = img.nextElementSibling//// h2
// console.log(h2.innerText)//// "Overview"




// // 5. adding Elements to the page
// // Example 1: Create and add a buton

// // Step 1: Create

// let newBtn = document.createElement(`button`);
// newBtn.innerText = `Explore Universe!`;

// // Step2: Add tp page
// let box = document.querySelector(`.box`);
// box.appendChild(newBtn)


// // Example 2: Add element to the start
// let h2 = document.querySelector(`h2`);

// h2.innerText = `Welcome To Space!`;
// let body = document.querySelector(`body`);

// body.prepend(h2);


// // Example 3: Create a paragraph with styling 
// let newPara = document.createElement(`p`);

// newPara.innerText = `The Universe is vast and mysterious!!.`;
// newPara.style.color = `red`;
// newPara.style.fontSize = `18px`;

// let box = document.querySelector(`.box`);
// box.appendChild(newPara);


// // Example 4: Using insertAdjacentElement(Precise Placement)
// let badge = document.createElement(`span`);
// badge.innerText = " 🌟 New!";

// let h1 = document.querySelector(`h1`);
// h1.insertAdjacentElement('beforeend', badge);



// // Example 5: Add multiple Elements
// let list = document.querySelector('ul');
// let item1 = document.createElement('li');
// item1.innerText = "Neptune: Ice Giant";
// let item2 = document.createElement('li');
// item2.innerText = "Uranus: Ice Giant";
// list.appendChild(item1);
// list.appendChild(item2);



// // 6. insertAdjacentElement Positions


// // Example 1: Add before an element
// let warning = document.createElement('p');
// warning.innerText = "⚠️ Content may change";
// let desc = document.querySelector('#description');
// desc.insertAdjacentElement('beforebegin', warning);
// // Warning appears BEFORE the description paragraph


// // Example 2: Add inside, at the start

// let icon =  document.createElement(`span`);
// icon.innerText="🌍 ";

// let h1 = document.querySelector(`h1`);
// h1.insertAdjacentElement(`afterbegin`,icon);


// // Example 3: Add inside, at the end

// let arrow = document.querySelector(`span`);
// arrow.innerText = `->`;

// let heading = document.querySelector(`h2`);
// heading.insertAdjacentElement(`beforeend`,arrow);



// // 7.Removing Elements from the page
// // Example 1: Removing an lement(modern)
// let oldImg = document.querySelector(`.oldImg`);
// oldImg.remove();


// // Example 3: Remove all images with a class
// let oldImages = document.querySelectorAll('.oldImg');
// // Loop through and remove each one
// for (let img of oldImages) {
// img.remove();
// }


// // Example 4: Remove on button click

// let btn = document.querySelector(`button`);
// let box = document.querySelector(`.box`);

// btn.addEventListener(`click`,()=>{
//     box.remove();
// })


//Example 5: Remove a specific child

let list = document.querySelector(`ul`);
let firstItem = list.children[0];
firstItem.remove();