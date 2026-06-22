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


// Example 2: giving your car to servicing center and your phone number , then leave it to mechanic and continue your other tasks of the day , as the servicing of the car finishes the mechanic will call you back (callback Function)