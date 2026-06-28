// // Exercise Practice notes

// // Level 1: Creating Basic Promises

// // Exercise 1: Age Checker
// function checkVotingEligibilty(age){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(age >= 18){
//                 resolve(`You are eligible to vote!!`)
//             }else{
//                 reject(`You are not eligible to vote!!`)
//             }
//         },1000);
//     });
// };

// checkVotingEligibilty(20)
// .then(msg => console.log(msg))
// .catch(error => console.log(error));

// // Exercide 1.2: Number Validator 

// function validateNumber(num){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         if(num > 0){
//             resolve(`Number is Positive!!`)
//         }else{
//             reject(`Number is Negative!!`)
//         }
//     },1000);
//     });
// };

// // Test cases
// validateNumber(42)
// .then(msg => console.log(msg))
// .catch(error => console.log(error));


// validateNumber(-10)
// .then(msg => console.log(msg))
// .catch(error => console.log(error));

// validateNumber(0)
// .then(msg => console.log(msg))
// .catch(error => console.log(error));


// // Exercise 1.3: Password Strrngth Checker
// function checkPassword(password) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(password.length >= 8){
//                 resolve(`Strong Password!!`)
//             }else{
//                 reject(`Week Passwor!!`)
//             }
//         },1000)
//     });
// };

// checkPassword(`abc123`)
// .then(msg => console.log(msg))
// .catch(eror => console.log(eror))


// // Exercise 1.4: Even or Odd
// function checkEvenOdd(number){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(number % 2 === 0){
//                 resolve(`Number is even!!`)
//             }else{
//                 reject(`Number is Odd!!`)
//             }
//         },1000);
//     });
// };

// // Test cases
// checkEvenOdd(10)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))

// checkEvenOdd(7)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))


// // Exercise 1.5: Grade Calculator
// function calculateGrade(marks) {
// return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//         if(marks >= 90){
//             resolve(`A+`)
//         }else if(marks >= 80){
//             resolve(`A`)
//         }else if(marks >=70){
//             resolve(`B`)
//         }else if(marks >=60){
//             resolve(`C`)
//         }else if(marks >=50){
//             resolve(`D`)
//         }else{
//             resolve(`Failed!`)
//         }
//     },1000)
// })
// }
// // Test multiple cases
// calculateGrade(95)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))

// calculateGrade(75)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))

// calculateGrade(35)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))



// // level 2: Consuming Promises
// // Exercise 2.1: Weather Checker

// function getWeather(city) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// const weather = {
// "Mumbai": { temp: 32, condition: "Sunny" },
// "Delhi": { temp: 28, condition: "Cloudy" },
// "Bangalore": { temp: 24, condition: "Rainy" }
// };
// if (weather[city]) {
// resolve(weather[city]);
// } else {
// reject("City not found");
// }
// }, 1000);
// });
// }
// // Your task: Consume this promise for "Mumbai"
// // Print: "Temperature: 32°C, Condition: Sunny"

// getWeather(`Mumbai`)
// .then((city)=>{
//     console.log(city)
// })

// getWeather(`Mumbai`)
// .then((city)=>{
//     console.log(`Tempearture: ${city.temp}*c ,Condition: ${city.condition}`)
// })


// // Exercise 2.2: User Authentication

// function login(username, password) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// if (username === "admin" && password === "pass123") {
// resolve({ username: username, role: "admin", token: "abc123xyz" });
// } else {
// reject("Invalid credentials");
// }
// }, 1500);
// });
// }
// // Your task:
// // 1. Try logging in with correct credentials
// // 2. On success, print welcome message with username and role
// // 3. Try logging in with wrong credentials
// // 4. On failure, print error message

// login(`admin`, `pass123`)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))


// // Exercise 2.3: File Download Simulator

// function downloadFile(filename) {
// return new Promise((resolve, reject) => {
// console.log("Downloading", filename, "...");
// setTimeout(() => {
// if (filename.endsWith(".pdf") || filename.endsWith(".jpg")) {
// resolve("Downloaded: " + filename + " (Size: 2.5 MB)");
// } else {
// reject("Error: Unsupported file format");
// }
// }, 2000);
// });
// }
// // Your task: Download "document.pdf" and "image.txt"
// // Handle both cases appropriately

// async function result () {
//     await downloadFile(`html.pdf`)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))

// await downloadFile(`html.md`)
// .then(msg => console.log(msg))
// .catch(error => console.log(error))
// }


// result();


// // Exercise 2.4: Database Query

// function queryDatabase(id) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// const users = {
// 101: { name: "Rahul", email: "rahul@example.com" },
// 102: { name: "Priya", email: "priya@example.com" },
// 103: { name: "Amit", email: "amit@example.com" }
// };
// if (users[id]) {
// resolve(users[id]);
// } else {
// reject("User not found in database");
// }
// }, 1000);
// });
// }
// // Your task: Query for user 102 and user 999
// // Print name and email for valid user
// // Print error for invalid user

// // queryDatabase(102)
// // .then((user)=> console.log(`${user.name} and ${user.email}`))
// // .catch((error)=> console.log(error))

// queryDatabase(999)
// .then((user)=> console.log(`${user.name} and ${user.email}`))
// .catch((error)=> console.log(error))


// // Exercise 2.5: API Response Handler

// function fetchAPI(endpoint) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// if (endpoint === "/users") {
// resolve({ data: ["User1", "User2", "User3"], status: 200 });
// } else if (endpoint === "/posts") {
// resolve({ data: ["Post1", "Post2"], status: 200 });
// } else {
// reject({ error: "Endpoint not found", status: 404 });
// }
// }, 1500);
// });
// }
// // Your task: Fetch "/users" and "/comments"
// // For success: Print data and status
// // For error: Print error message and status

// fetchAPI(`/`)
// .then(data => console.log(`${data.data} ${data.status}`))
// .catch(error => console.log(`${error.error} ${error.status}`))



// // Level 3: Promise Chaining (Sequential Operations)

// function checkEligibility(marks) {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// console.log("Checking eligibility...");
// if (marks >= 60) {
// resolve({ eligible: true, marks: marks });
// } else {
// reject("Not eligible: Marks too low");
// }
// }, 1000);
// });
// }
// function registerStudent(data) {
// return new Promise((resolve) => {
// setTimeout(() => {
// console.log("Registering student...");
// resolve({
// ...data,
// studentId: "STU" + Math.floor(Math.random() * 1000),
// enrolled: true
// });
// }, 1000);
// });
// }
// function sendConfirmation(student) {
// return new Promise((resolve) => {
// setTimeout(() => {
// console.log("Sending confirmation email...");
// resolve("Enrollment complete! Student ID: " + student.studentId);
// }, 1000);
// });
// }
// // Your task: Chain these three promises
// // Start with checkEligibility(75)
// // Print the final message

// checkEligibility(75)
// .then((status)=>{
//     registerStudent(status).then((student)=>{
//     console.log(` the Student ID is: ${student.studentId}`)
//         sendConfirmation(student).then(msg => console.log(msg))
//     })
// })
// .catch(error => console.log(error))



// Exercise 3.2: Food Delivery Chain
function placeOrder(item) {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Order placed:", item);
resolve({ item: item, orderId: "ORD123" });
}, 1000);
});
}
function prepareFood(order) {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Preparing:", order.item);
resolve({ ...order, status: "Prepared" });
}, 2000);
});
}
function deliverFood(order) {
return new Promise((resolve) => {
setTimeout(() => {
console.log("Delivering:", order.item);
resolve({ ...order, delivered: true });
}, 1500);
});
}
// Your task: Chain the process for ordering "Pizza"
// Print "Order delivered successfully!" at the end

placeOrder(`Pizza`)
.then((status)=>{
    prepareFood(status).then((order)=>{
        deliverFood(order).then((reciept)=>{
            console.log(`Order delivered successfully!`)
        })
    })
})