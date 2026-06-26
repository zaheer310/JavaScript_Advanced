// //Part 1: Selecting Elements by ID

// //Q1. Select and Log the Main Heading
// const heading1 = document.getElementById(`mainHeading`);
// console.log(heading1);

// // Q2. Select and Log the Intro Paragraph
// const introPara = document.getElementById(`intro`)
// console.log(introPara);

// // Q3. Select the Skills List

// const skillsList = document.getElementById(`skillsList`)
// console.log(skillsList)

// //Q4. Select the Gallery Div
// const gallaryDiv = document.getElementById(`gallery`)
// console.log(gallaryDiv)

// //Q5. Select the Footer
// const footerSec = document.getElementById(`pageFooter`);
// console.log(footerSec)

// //Part 2: Selecting Elements by Class Name

// // 1Q. Select All Description Paragraphs
// const descPara = document.getElementsByClassName(`description`)
// console.log(descPara)

// // 3Q .Select All Project Images
// const projectImg = document.getElementsByClassName(`project`);
// console.log(projectImg)


// // Access Individual Elements
// const allElems = document.getElementsByClassName(`description`)
// console.log(allElems[0]);
// console.log(allElems[1]);


// // Loop Through Skills
// const skillList = document.getElementsByClassName(`skill`);
// for (const skill of skillList) {
//     console.log(skill);
// }


// // Part 3: Selecting Elements by Tag Name


// // Q1. Select All Paragraphs
// const allPara = document.getElementsByTagName(`p`);
// console.log(allPara);

// // Select All Headings
// const allH2s = document.getElementsByTagName(`h2`);
// console.log(allH2s);

// // Q3. Select All Links
// const allLinks = document.getElementsByTagName(`a`);
// console.log(allLinks);
// console.log(allLinks.length);

// // Q4. Select All Images
// const allImgs = document.getElementsByTagName(`img`);
// console.log(allImgs);


// //Q5. Access First Paragraph
// const firstPara = document.getElementsByTagName(`p`);
// console.log(firstPara);


// //Part 4: Using querySelector

// // Q1. Select Main Heading with querySelector
// const heading1 = document.querySelector(`#mainHeading`);
// console.log(heading1);


// // Q2. Select First Description Paragraph
// const firstDescPara = document.querySelector(`.description`);
// console.log(firstDescPara);


// //Select First Skill
// const firstSkill = document.querySelector(`.skill`);
// console.log(firstSkill);


// // Q4. Select First Link in Footer
// const firstFooterLink = document.querySelector(`a`);
// console.log(firstFooterLink)

// // Select Gallery Div
// const gallaryDiv = document.querySelector(`#gallery`)
// console.log(gallaryDiv)


// //Part 5: Using querySelectorAll


// //Q1. Select All Description Paragraphs
// const allParaS = document.querySelectorAll(`p`);
// console.log(allParaS);


// // Select All Skills
// const allSkills = document.querySelectorAll(`.skill`);
// console.log(allSkills);


// // Q3. Select All Contact Links
// const allContactLinks = document. querySelectorAll(`.contact-link`);
// console.log(allContactLinks);


// //Q4. Select All Images in Gallery
// const allImgs = document.querySelectorAll(`.project`);
// console.log(allImgs)



// // Q5. Select All Containers
// const allContainers = document.querySelectorAll(`.container`);
// console.log(allContainers)
// console.log(allContainers.length)


// // Part 6: Working with innerText

// // Q1. Get and Log Text
// const mHeading = document.querySelector(`h1`);
// console.log(mHeading.innerText);

// // Q2. Change Heading Text
// const heading = document.querySelector(`h1`);
// console.log(heading.innerText = "JavaScript DOM Assignment")


// // Q3. Get Intro Paragraph Text
// console.log(document.querySelector(`p`).innerText)


// // Q4. Change First Description
// console.log(document.querySelector(`p`).innerText = "I love learning JavaScript!");


// // Q5. Get Skills Text
// const firstSkill = document.querySelector(`.skill`);
// console.log(firstSkill.innerText)


// Part 7: Working with textContent

// Q1. Get Text Content of Intro
const paraContent = document.querySelector(`#intro`);
console.log(paraContent.textContent)
