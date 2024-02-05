//Asynchronous JS

console.log("Yash");

setTimeout(() => {
  console.log("Yash");
}, 4000);

// setInterval(() => {
//   console.log("Harshit");
// }, 3000);

fetch("https://fakestoreapi.com/products")
  .then((data) =>
    data
      .json()
      .then((data) => console.log(data))
      .catch((err) => console.log("Error in json", err))
  )
  .catch((err) => console.log("Error occur", err));
