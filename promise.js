//creating promise: it takes a function with two parameters: resolve, reject.

let myPromise = new Promise((resolve, reject) => {
    let success = true; // Change to false to test rejection

    setTimeout(() => {
        if (success) {
            resolve("Data received! ✅");
        } else {
            reject("Error: Something went wrong ❌");
        }
    }, 2000);
});

// Consuming the Promise
myPromise
    .then((data) => console.log(data))  // Runs if resolved
    .catch((error) => console.log(error)); // Runs if rejected

