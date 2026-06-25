// // Notes Day_17

// // Introduction to JSON

// // Working with JSON

// // JSON.parse(data)
// let jsonString = `{"name": "Alice", "age":25}`;
// let obj = JSON.parse(jsonString);
// console.log(obj);

// //JSON.stringify(Object)
// let user = { name: `Bob`, age: 22 };
// let jsonString = JSON.stringify(user);
// console.log(jsonString);

// The fetch() API

let url = `https://catfact.ninja/fact`;
fetch(url)
  .then((response) => {
    // console.log(response);
    return response.json();
  })
  .then((data) => {
    console.log(data.fact);
  })
  .catch((error) => {
    console.log(`Error: ${error}`);
  });
