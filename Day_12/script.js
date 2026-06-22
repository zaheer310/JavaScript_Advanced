// notes Day 12

// // Example 1 : Basic button click
// let btn = document.querySelector(`button`)

// btn.addEventListener(`click`,function(){
//     console.log(`Button was Clicked`)
//     alert(`you clicked me!`)
// })

// // Example 2: Multiple Listners on same elements
// let button = document.querySelector(`#myBtn`);

// // First listner
// button.addEventListener("click", function () {
//   console.log("First Action");
// });

// // Second listner(doesnot overwrite the first!)
// button.addEventListener("click", function () {
//   console.log(`Second Action`);
// });

// // Exampl 3: Paragraph Click Counter
// let para = document.querySelector(`p`);
// let count = 0;

// para.addEventListener(`click`, function () {
//   count++;
//   console.log(count);
// });

// // Mouse & Pointer Events
// // Example 1: Hover Color Change
// let box = document.querySelector(`.box`);
// box.addEventListener(`mouseenter`, function () {
//   box.style.backgroundColor = `yellow`;
//   console.log(`Mouse Entered!!!`);
// });

// // Example 2:Click to Toggle Visibility

// let hideBtn = document.querySelector(`#hideBtn`);
// let content = document.querySelector(`#content`);

// hideBtn.addEventListener(`click`, function () {
//   if (content.style.display === `none`) {
//     content.style.display = `block`;
//     hideBtn.innerText = `Hide`;
//   } else {
//     content.style.display = ` none`;
//     hideBtn.innerText = `Show`;
//   }
// });

// // Example 3: Double Click to Edit
// let heading = document.querySelector(`h1`);

// heading.addEventListener(`dblclick`, function () {
//   heading.innerText = `You double-clicked me!!!`;
//   heading.style.color = `black`;
// });


// // Example 4: Interactive Card Hover

// let card = document.querySelector(`.card`)

// card.addEventListener(`mouseenter`,function(){
//     card.style.transform =`scale(1.1)`;
//     card.style.boxShadow = "0 10px 30px rgba(0,0,0,0.3)";
// });

// card.addEventListener(`mouseleave`,function(){
//     card.style.transform = `scale(1)`;
//     card.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
// });