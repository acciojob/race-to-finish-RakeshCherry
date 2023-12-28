window.promises = [ createPromiseWithRandomDelay(),
    createPromiseWithRandomDelay(),
    createPromiseWithRandomDelay(),
    createPromiseWithRandomDelay(),
    createPromiseWithRandomDelay()];

// Do not change the code above this
// add your promises to the array `promises`
// Array of promises with random times between 1 and 5 seconds

// Function to create a promise with a random delay
function createPromiseWithRandomDelay() {
    const randomDelay = Math.floor(Math.random() * 5) + 1; // Random time between 1 and 5 seconds

    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Promise resolved with ${randomDelay} seconds delay`);
        }, randomDelay * 1000);
    });
}

// Using Promise.any to wait for the first promise to resolve
Promise.any(promises)
    .then(result => {
        // Printing the result to the output div
        const outputDiv = document.getElementById('output');
        outputDiv.textContent = result;
    })
    .catch(error => {
        console.error('Error:', error);
    });
