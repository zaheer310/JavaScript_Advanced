// Day_14


// // The Problem with Promise Chains
// // Using Promise Chains (The Old Way)
// fetchUserData()
// .then((user) => {
// console.log("User:", user);
// return fetchUserPosts(user.id);
// })
// .then((posts) => {
// console.log("Posts:", posts);
// return fetchPostComments(posts[0].id);
// })
// .then((comments) => {
// console.log("Comments:", comments);
// })
// .catch((error) => {
// console.log("Error:", error);
// });



// // The Solution of Promise Chains
// // Using Async/Await (The New Way)
// async function getUserContent() {
// try {
// const user = await fetchUserData();
// console.log("User:", user);
// const posts = await fetchUserPosts(user.id);
// console.log("Posts:", posts);
// const comments = await fetchPostComments(posts[0].id);
// console.log("Comments:", comments);
// } catch (error) {
// console.log("Error:", error);
// }
// }
// getUserContent();



// // The async Keyword
// // Example 1: 
// // Normal Function 
// function normalGreeting(){
//     return `Hello, Students!!!`
// }

// console.log(normalGreeting()); // Output: Hello, Students!!!

// // Async Fuction
// async function asyncGreeting(){
// return `Hello, Students!!!`
// }
// console.log(asyncGreeting()); // Output:Promise {<fulfilled>: 'Hello, Students!!!'}


// // Example 2: Async Function Returning Different Values
// // Returning a string
// async function getCourseName() {
//     return `JavaScript`;
// }

// getCourseName().then(name => console.log(name)); //  Output: "JavaScript Fundamentals"

// // Returning a number
// async function getStudentCount() {
//     return 50;
// }

// getStudentCount().then(num => console.log(num));// Output: 50


// // Returning An Object
// async function getStudentInfo() {
//     return {
//         name : `Zaheer`,
//         age : 22,
//         course : `C.S.E`, 
//     }
// }

// getStudentInfo().then(infoObj => console.log(infoObj)) // {name: 'Zaheer', age: 22, course: 'C.S.E'}


// // Example 3: Async Function with Errors
// async function divideNumber(a,b) {
//     if(b ===0){
//         throw new Error(`Cannot divide by zero`)
//     }
//     return a/b;
// }

// // success case

// divideNumber(10,5)
// .then(num => console.log(num))
// .catch(error => console.log(error))

// // Error Case
// divideNumber(10,0)
// .then(num => console.log(num))
// .catch(error => console.log(error))



// // The await keyword

// // Example 1:
// // simulating an API call that takes 2 seconds
// function fetchStudentData(){
//     return new Promise((resolve) =>{
//         setTimeout(()=>{
//             resolve({name : `Ahmed` , grade : `A`})
//         },2000)
//     });
// }

// async function dispalayStudent() {
//  console.log(`Fetching student data`)

//    // Execution pauses here 
// const student = await fetchStudentData();

// // This line won't work until the promise resolves

// console.log(`Student Name :${student.name}`);
// console.log(`Student Garde :${student.grade}`)
// }

// dispalayStudent();


// Example 2: Multiple await calls
function step1(){
    return new Promise((resolve) =>{
        setTimeout(()=>{
            console.log(`Step 1: Gathering ingredients`)
            resolve();
        },1000)
    })
}

function step2(){
    return new Promise((resolve) =>{
    setTimeout(()=>{
        console.log(`Step 2: Mixing ingredients`)
        resolve();
    },1000)
});
}

function step3(){
    return new Promise((resolve) =>{
    setTimeout(() =>{
        console.log(`Step 3 : Baking in Oven`)
        resolve();
    },1000)
    })
}

async function bakeCake() {
    console.log(`Steps to bake a cake ....`);
    await step1();
    await step2();
    await step3();
    console.log(`Cake is Ready !!!`)
}
bakeCake();



