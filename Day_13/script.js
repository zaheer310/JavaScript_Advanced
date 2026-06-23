// // notes Day- 13

// // Example 1: CallBacks with Asynchronous Operations

// function fetchStudentData(studentId, callback){
//     console.log(`Fetching data for Student ID:`, studentId);

//     // simulate database delay
//     setTimeout(() =>{
//         let studentData = {
//             id:studentId,
//             name : `Zaheer Uddin`,
//             course : `CSE`
//         }
//         console.log(`Data fetched Successfully`);

//         callback(studentData);
//     } ,10000)

// }

// function displayStudent(studentData){
//     console.log(`Displaying Student`);
//     console.log(`Name: ${studentData.name}`);
//     console.log(`Course: ${studentData.course}`)
// }

// fetchStudentData(101,displayStudent)

// // Example : (The Pyramid Of Doom) to demonstrate the concept of synchronous behaviour by using call back functions
// function saveToDatabase(data, callback) {
//   console.log(`Calling DataBase`);

//   setTimeout(() => {
//     const isDbAvailable = Math.random() > 0.2;
//     if (isDbAvailable) {
//       console.log(`${data} is Successfully saved !!`);
//       callback();
//     } else {
//       console.log(`${data} not saved`);
//     }
//   }, 2000);
// }

// saveToDatabase(`msg1`, () => {
//   saveToDatabase(`msg2`, () => {
//     saveToDatabase(`msg3`, () => {
//       saveToDatabase(`msg4`, () => {
//         console.log(`All messages saved successfully!!`);
//       });
//     });
//   });
// });

// Example : (The Pyramid Of Doom) To demonstrate the concept of synchronous behaivior using callback function

// const h1 = document.querySelector(`h1`);

// function changeColor(color, delay, nextColor) {
//   setTimeout(() => {
//     h1.style.color = color;
//     nextColor();
//   }, delay);
// }

// changeColor(`red`, 1000, () => {
//   changeColor(`green`, 1000, () => {
//     changeColor(`blue`, 1000, () => {
//       changeColor(`orange`, 1000, () => {
//         console.log(`Done !!!`);
//       });
//     });
//   });
// });

// Promises: The Solution

// // Example : Create a Promise

// let myPromise = new Promise((resolve, reject) => {
//   // Asynchronous Operation here
//   let success = 0;
//   if (success) {
//     resolve(`Operation Successfull!`);
//   } else {
//     reject(`Opeartion Failed !!`);
//   }
// });

// // Example : Basic Promise Example
// let internetSpeed = `fast`;

// let downloadFile = new Promise((resolve, reject) => {
//   console.log(`Download Satrts!`);
//   setTimeout(() => {
//     if (internetSpeed === `fast`) {
//       resolve(`File downloaded successfully!!`);
//     } else {
//       reject(`Download failed: Slow internet`);
//     }
//   }, 2000);
// });

// console.log(`Download Initiated!!`);
// console.log(downloadFile);

// // Example : DataBase Operation
// function saveToDatabase(data) {
//   return new Promise((resolve, reject) => {
//     console.log(`Saving to database!!`);
//     setTimeout(() => {
//       let dbAvailable = true;
//       if (dbAvailable) {
//         resolve({
//           message: `Data Saved Successfully!!!`,
//           id: 12345,
//           timestamp: new Date(),
//         });
//       } else {
//         reject(`Datbase connection failed`);
//       }
//     }, 1500);
//   });
// }

// let savePromise = saveToDatabase({ name: `Jhon`, age: 22 });
// console.log(savePromise);

// // Consuming Promises:.then() and .catch()
// // Example : .then()
// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(`Success! data is here`);
//   }, 1000);
// });

// promise.then((message) => {
//   console.log(message);
// });

// // The .catch() method

// let promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(`Error!, Something went wrong`);
//   }, 1000);
// });

// console.log(promise);

// // Using both Together
// let loginStatus = !`success`;
// let loginPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     if (loginStatus) {
//       resolve(`Login Successfull !!, Welcome back`);
//     } else {
//       reject(`Login failed !!, Invalid credentials.`);
//     }
//   }, 1500);
// });
// loginPromise
//   .then((message) => {
//     console.log(`✔ ,${message}`);
//   })
//   .catch((message) => {
//     console.log(`✖, error`);
//     console.log(`Please try again`);
//   });

// //   Example : Real API Example
// function getStudentProfile(studentId) {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching Student Documents!`);

//     setTimeout(() => {
//       if (studentId > 0) {
//         resolve({
//           id: studentId,
//           name: `Zaheer`,
//           age: 22,
//         });
//       } else {
//         reject(`Student Not Found!!!`);
//       }
//     }, 2000);
//   });
// }

// getStudentProfile(-122)
//   .then((student) => {
//     console.log(`Student Found!!`);
//     console.log(`Name : ${student.name}`);
//     console.log(`Age : ${student.age}`);
//   })

//   .catch((message) => {
//     console.log(message);
//   });


// FInally method(Bonus)
// Example : 
let loadingSpinner = true;
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(`User Data received`)
        },1000)
    })

}
