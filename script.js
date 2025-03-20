//your JS code here. If required.
const outputDiv = document.getElementById("output");

function delayedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]); // Initial array after 3 seconds
        }, 2000);
    });
}

delayedPromise()
    .then((arr) => {
        // First transformation: Filter even numbers
        return new Promise((resolve) => {
            setTimeout(() => {
                const evenNumbers = arr.filter(num => num % 2 === 0);
                outputDiv.innerText = `[${evenNumbers.join(", ")}]`; // Update output div
                resolve(evenNumbers);
            }, 1000);
        });
    })
    .then((evenNumbers) => {
        // Second transformation: Multiply by 2
        return new Promise((resolve) => {
            setTimeout(() => {
                const multipliedNumbers = evenNumbers.map(num => num * 2);
                outputDiv.innerText = `[${multipliedNumbers.join(", ")}]`; // Update output div again
                resolve(multipliedNumbers);
            });
        });
    });

