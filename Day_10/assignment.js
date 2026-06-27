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

// // Q1. Get Text Content of Intro
// const paraContent = document.querySelector(`#intro`);
// console.log(paraContent.textContent)

// //Q2. Get All Text from Container
// const container = document.querySelector(`.container`);
// console.log(container.textContent);


// // Q3.Get All Text from Container
// const h2 = document.querySelector(`h2`);
// console.log(h2.textContent = `Updated Section`);

// // Q5. Compare Properties of TextContent & innetText
// const introPara = document.querySelector(`p`);
// console.log(introPara.textContent);
// console.log(introPara.innerText)



// //  Part 8: Working with innerHTML

// // Q1. Get HTML Structure
// const introPara = document.querySelector(`#intro`)
// console.log(introPara)

// // Q2. Add HTML to Heading
// const heading1 = document.querySelector(`h1`)
// console.log(heading1.innerHTML = `JavaScript DOM`)

// // Q3. Change Paragraph with HTML
// const firstPara = document.querySelector(`p`);
// firstPara.innerHTML = `I am learning <strong>Dom Manipulation</strong>!`


// // Q4. Add Link to Footer
// const footer = document.querySelector(`footer`);
// footer.innerHTML = '<p>Visit <a href="#">my website</a></p>'

// // Q5. Get Skills List HTML
// const skillList = document.querySelector(`#skillsList`);
// console.log(skillList)





// // Part 9: Combined Practice 

// // Q1. Select and Modify
// const mHeading = document.querySelector(`h1`);
// mHeading.innerHTML = `DOM Mastery Assignment`

// // Q2. Count and Display
// const allPara = document.querySelectorAll(`p`)
// for (const para of allPara) {
//     para.innerHTML = `Total paragraphs: ${allPara.length}`
// }

// // Q3. Change Multiple Elements
// const skills = document.querySelectorAll(`.skill`);
// for (const skill of skills) {
//     skill.innerHTML = `${skill.innerText} Learning.`
// }

// // Q4. Get HTML Content
// const gallery = document.querySelector(`#gallery`);
// console.log(gallery.innerHTML) 


// // Q5. Complex Selection
// const firstFooter = document.querySelector(`a`);
// firstFooter.innerText = "contact@myemail.com";


//// Part 10: Challenge Problems

// // Q1. Update All Descriptions
// const allPara = document.querySelectorAll(`p`);

// for (const para of allPara) {
//     console.log(para.innerText = `${para.innerText} Updated!!`);
// }

// Q2. Create a Skills Counter
const skillsList = document.querySelectorAll(`.skill`);
let count =0;
for (const skill of skillsList) {
    count++;
}
console.log(count);

// Q3. Modify Footer Links


// Q4. HTML Structure Exploration


// Q5. Selective Update