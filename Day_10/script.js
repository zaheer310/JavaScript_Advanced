// // Day 10

// // Selecting by Id's
// // Syntax document.getElementById(`value of ID`)

// // Example 1: Select heading by Id
// console.log(document.getElementById(`heading1`));

// // Example 2: Select the Div Box

// let divBox = document.getElementById(`box`);
// console.log(divBox);

// // Example 3: Check if element exist
// let element = document.getElementById("nonexistent");
// console.log(element);// Output : null (element does not exist)

// // Select elements by Class
// // Syntax : document.getElementByClassName(`Class_Name`);

// // Example 1: Select All Small Images
// let oldImages = document.getElementsByClassName(`oldImg`);
// console.log(oldImages);

// // Example 2: Acces Individual Elements
// let oldImg = document.getElementsByClassName(`oldImg`);

// console.log(oldImg[0]);
// console.log(oldImg[1]);
// console.log(oldImg[2]);

// // Example 3: Loop through the collection

// let oldImg = document.getElementsByClassName(`oldImg`);

// for (img of oldImg) {
//   console.log(img);
// }

// // Example 4: Select Box Links

// let boxLinks = document.getElementsByClassName(`boxLink`);

// console.log(boxLinks);

// // Selecting Elements by Tag name
// // Syntax: document.getElementByTagName(`Tag_Name`);

// // Example 1: Select All Paragraphs
// let Paragraphs = document.getElementsByTagName(`p`);
// console.log(Paragraphs);

// // Example 2: Count Elements
// let paragraphsCount = document.getElementsByTagName(`p`);
// console.log(paragraphsCount.length);

// // Example 3:Select All links
// let allLinks = document.getElementsByTagName(`a`);
// console.log(allLinks);

// // Example 4: Select All images
// let allImages = document.getElementsByTagName(`img`);
// console.log(allImages);

// // Query Selectors(The Modern Way!!!!)

// // Example 1: Select By Id

// let heading = document.querySelector(`#heading1`);
// console.log(heading);

// // Example 2: Select by Class(First Match Only)

// let firstOldImg = document.querySelector(`.oldImg`);
// console.log(firstOldImg);

// // Example 3: Select all Elements with querySelectorAll

// let allOldImg = document.querySelectorAll(`.oldImg`);
// console.log(allOldImg);

// // Example 4: Select by Tag
// let firstPara = document.querySelector(`p`);
// console.log(firstPara);

// // Example 5: complex Selctors (Links inside a specific Div)
// let boxLink = document.querySelector(`.box a`);
// console.log(boxLink);

// //InnerText;

// // Example 1: Get Visible Text
// let para = document.querySelector(`#Overview`);
// console.log(para.innerText);

// // Example 2: Change Heading Text
// let heading = document.querySelector(`#heading1`);
// heading.innerText = `Our Amazing Solar System`;
// console.log(heading.innerText);

// // Example 3: Get Text from multiple elements

// let firstParaInnerText = document.querySelector(`p`);
// console.log(firstParaInnerText.innerText);

// Text Content

// // Example 1: Get all text content
// let para = document.querySelector(`#description`);
// console.log(para.textContent);

// // Example 2: Change Text Content
// let heading = document.querySelector(`h1`);
// heading.textContent = `Welcome To Sapce`;
// console.log(heading.textContent);

// // Example 3: Compare with innerText

// let element = document.querySelector(`#description`);
// console.log(element.innerText);
// console.log(element.textContent);

// //  InnerHTML
// // Example 1:  See the HTML Structure
// let para = document.querySelector(`p`);
// console.log(para.innerHTML);

// // Example 2: Add HTML Tags
// let heading = document.querySelector(`#heading1`);
// heading.innerHTML = `<u> The Solar System </u>`;
// console.log(heading);

// // Problem!!!
// // Example 3: Add Complex HTML
// let heading = document.querySelector(`#heading`);
// heading.innerHTML = `The <span style = "color:gold;">Solar</span> System`;
// console.log(heading);

// // Example 4: Read links from Paragraph
// let para = document.querySelector(`p`);
// console.log(para.innerHTML);



// // Practice Exercise :

// // Exercise 1: Selection Practice

// // 1. Select the main image by its ID

// // const mainImg = document.querySelector(`#mainImg`);
// // console.log(mainImg)

// // 2. Select all images with class "oldImg"
// const oldImgs = document.querySelector(`.oldImg`)
// console.log(oldImgs);

// // 3. Select all paragraph elements
// const allPara = document.querySelector(`p`)
// console.log(allPara)

// // 4. Select the description paragraph using querySelector
// const descPara = document.querySelector(`#description`)
// console.log(descPara);

// // 5. Select all links inside the .box div
// const allLinks = document.querySelectorAll(`.boxLink`)
// console.log(allLinks)




// Exercise 2: content Manipulation

// // 1. Get the text of the main heading
// const heading1 = document.querySelector(`#heading1`)
// console.log(heading1.innerText);


// // 2. Change the heading to "Exploring Our Solar System"
// const heading1 = document.querySelector(`#heading1`)
// console.log(heading1.innerText = `Exploring Our Solar System`);


// // 3. Get the innerHTML of the first paragraph
// const firstPara = document.querySelector(`p`)
// console.log(firstPara.innerHTML)


// // 4. Change the first h2 to include a star emoji ⭐

// const heading2 = document.querySelector(`h2`);
// console.log(heading2.innerText = `⭐`)

// // 5. Log the innerText of the description paragraph

// const descPara = document.querySelector(`#description`);
// console.log(descPara.innerText)



// Exercise 3: Combining Skills


// 1. Select all images with class "oldImg"
const oldImg = document.querySelectorAll(`.oldImg`);
console.log(oldImg)
// 2. Log how many images you found
console.log(oldImg.length)

// 3. Select the first paragraph and get its text
const firstPara = document.querySelector(`p`);
console.log(firstPara)

// 4. Change the main heading using innerHTML to include <strong> tags

// 5. Select all boxLinks and log their count
const allBoxLinks = document.querySelectorAll(`.boxLink`)
console.log(allBoxLinks)
console.log(allBoxLinks.length)
