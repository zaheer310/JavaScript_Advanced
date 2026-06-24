// Day_14
//// 1. Introduction to Async/Await
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

// //2. The async Keyword
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

// //3. The await keyword

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

// // Example 2: Multiple await calls
// function step1() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Step 1: Gathering ingredients`);
//       resolve();
//     }, 1000);
//   });
// }

// function step2() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Step 2: Mixing ingredients`);
//       resolve();
//     }, 1000);
//   });
// }

// function step3() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Step 3 : Baking in Oven`);
//       resolve();
//     }, 1000);
//   });
// }

// async function bakeCake() {
//   console.log(`Steps to bake a cake ....`);
//   await step1();
//   await step2();
//   await step3();
//   console.log(`Cake is Ready !!!`);
// }
// bakeCake();

// // Example 3 : The difference between with and without await
// function slowTask() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(`Task Completed!!!`);
//     }, 2000);
//   });
// }

// async function withoutAwait() {
//   console.log(`Start!!!`);
//   slowTask();
//   console.log(`End!!`);
// }
// withoutAwait();
// // Output (immediate):
// // start
// // end

// // WITH await
// async function withAwait() {
//   console.log(`Starts!!`);
//   const msg = await slowTask();
//   console.log(msg);
//   console.log(`End!!`);
// }
// withAwait();

// // 4.Sequential Execution: The Power of await
// function generateRollNumber() {
// return new Promise((resolve) => {
// const delay = Math.random() * 2000; // Random delay up to 2 seconds
// setTimeout(() => {
// const rollNo = Math.floor(Math.random() * 100) + 1;
// console.log("Generated Roll No:", rollNo);
// resolve();
// }, delay);
// });
// }
// // WITHOUT await (chaotic order)
// async function assignRollNumbersChaotic() {
// console.log("--- Starting Assignment ---");
// generateRollNumber(); // Starts
// generateRollNumber(); // Starts immediately
// generateRollNumber(); // Starts immediately
// console.log("--- Assignment Complete ---");
// }
// assignRollNumbersChaotic();
// // Output (unpredictable order):
// // --- Starting Assignment ---
// // --- Assignment Complete ---
// // Generated Roll No: 45
// // Generated Roll No: 78
// // Generated Roll No: 23

// // WITH await (predictable order)
// async function assignRollNumbersOrdered() {
// console.log("--- Starting Assignment ---");
// await generateRollNumber(); // Waits for first to complete
// await generateRollNumber(); // Then starts and waits for second
// await generateRollNumber(); // Then starts and waits for third
// console.log("--- Assignment Complete ---");
// }
// assignRollNumbersOrdered();
// // Output (guaranteed order):
// // --- Starting Assignment ---
// // Generated Roll No: 45
// // Generated Roll No: 78
// // Generated Roll No: 23
// // --- Assignment Complete ---

// // 5.Refactoring Promise Chains to Async/Await

// // Example 1: Traffic ligth System
// // Old Way(Promise Chain)
// function changeLigth(color, duration) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log(`Traffic Ligth: ${color}`);
//       resolve();
//     }, duration);
//   });
// }
// // Promise Chain
// changeLigth(`Red`, 3000)
//   .then(() => changeLigth(`Yellow`, 1000))
//   .then(() => changeLigth(`Green`, 3000))
//   .then(() => changeLigth(`Traffic Cycle Completed!!!`))
//   .catch((error) => console.log(`Error: ${error}`));

// //   new Way(Async/Await)
// async function trafficLigthCycle() {
//   try {
//     await changeLigth(`RED`, 3000);
//     await changeLigth(`YELLOW`, 1000);
//     await changeLigth(`Green`, 3000);
//     console.log(`Traffic Signal Cycle Completed!!`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// trafficLigthCycle();

// // Example 2: User Registration Flow
// function validateEmail(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email.includes(`@`)) {
//         resolve(email);
//       } else {
//         reject(`Invalid Email!!`);
//       }
//     }, 1000);
//   });
// }

// function checkEmailExist(email) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const exist = false;
//       if (exist) {
//         reject(`Email already registered!!`);
//       } else {
//         resolve(email);
//       }
//     }, 1000);
//   });
// }

// function createUser(email) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ id: 123, email: email });
//     }, 1000);
//   });
// }

// // Promise Chain(old way)

// validateEmail(`zaheer123@gmail.com`)
//   .then((email) => checkEmailExist(email))
//   .then((email) => createUser(email))
//   .then((user) => console.log(`UserID: ${user.id} , User_Gmail: ${user.email}`))
//   .catch((error) => console.log(`Error: ${error}`));

// Async/Await(New Way)

// async function registerUser(email) {
//   try {
//     await validateEmail(email);
//     await checkEmailExist(email);
//     const user = await createUser(email);
//     console.log(`UserID: ${user.id} , User_Gmail: ${user.email}`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }
// registerUser(`zaheer123@gmail.com`);

// // Example 3: Data Processing Pipeline
// // Promise Chain (Old Way)
// function fetchData() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve([1, 2, 3, 4, 5]);
//     }, 1000);
//   });
// }

// function processData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const processed = data.map((num) => num * 2);
//       resolve(processed);
//     }, 1000);
//   });
// }

// function saveData(data) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("saved:", data);
//       resolve(`Success!`);
//     }, 1000);
//   });
// }

// // Promise chain(old way)
// fetchData()
//   .then((data) => {
//     return processData(data);
//   })
//   .then((processed) => {
//     return saveData(processed);
//   })
//   .then((result) => console.log(`Result : ${result}`))
//   .catch((error) => console.log(`Error: ${error}`));

// Async/Await(New Way)

// async function dataPipeline() {
//   try {
//     const data = await fetchData();
//     console.log(`Fetched: ${data}`);

//     const processed = await processData(data);
//     console.log(`Processed : ${processed}`);

//     const result = await saveData(processed);
//     console.log(`Result : ${result}`);
//     console.log(`Mission Successfull!!!`);
//   } catch (error) {
//     console.log(`Error: ${error}`);
//   }
// }

// dataPipeline();

// // Error Handling with Try/Catch

// // Example 1: Basic Error Handling
// function riskyOperation() {
//   return new Promise((resolve, reject) => {
//     const success = Math.random() > 0.5;
//     setTimeout(() => {
//       if (success) {
//         resolve(`Operation Successfull!!`);
//       } else {
//         reject(`Operation Failed!!`);
//       }
//     }, 1000);
//   });
// }

// async function performOperation() {
//   try {
//     console.log(`Starting Operation...`);
//     const result = await riskyOperation();
//     console.log(`Success : ${result}`);
//   } catch (error) {
//     console.log(`Caugth error : ${error}`);
//   }
// }

// performOperation();

// Example 2: Multiple Operations with Error Handling
function checkInternet() {
  return new Promise((resolve, reject) => {
    const isOnline = true;
    setTimeout(() => {
      if (isOnline) {
        resolve(`Internet Connected!!`);
      } else {
        reject(`No Internet Connection!!`);
      }
    }, 500);
  });
}

function downloadFile(filename) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const fileExist = true;
      if (fileExist) {
        resolve(`Download: ${filename}`);
      } else {
        reject(`File not Found : ${filename}`);
      }
    }, 1500);
  });
}

function installFile(filename) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Installed: ${filename}`);
    }, 1000);
  });
}

async function downloadAndInstall(filename) {
  try {
    // Step 1: Check internet
    const internetStatus = await checkInternet(filename);
    console.log(internetStatus);

    // Step 2:
    const downloadStatus = await downloadFile(filename);
    console.log(downloadStatus);

    // Step 3:
    const installStatus = await installFile(filename);
    console.log(installStatus);

    console.log(`All Done!!`);
  } catch (error) {
    console.log(`Process failed: ${error}`);
    console.log(`Please Try again!!`);
  }
}

downloadAndInstall(`ReactJs-Setup.exe`);
