const readline = require('readline');

// Create an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Function to get user input
rl.question("Enter a number to display its multiplication table: ", (input) => {
    let number = parseInt(input);

    // Check if the input is a valid number
    if (isNaN(number)) {
        console.log("Please enter a valid number.");
    } else {
        // 1. Multiplication using for loop
        console.log("Multiplication Table using for loop:");
        for (let i = 1; i <= 10; i++) {
            console.log(`${number} x ${i} = ${number * i}`);
        }

        console.log("\n"); // Line break for better output formatting

        // 2. Multiplication using while loop
        console.log("Multiplication Table using while loop:");
        let i = 1;
        while (i <= 10) {
            console.log(`${number} x ${i} = ${number * i}`);
            i++;
        }

        console.log("\n"); // Line break for better output formatting

        // 3. Multiplication using do-while loop
        console.log("Multiplication Table using do-while loop:");
        let j = 1;
        do {
            console.log(`${number} x ${j} = ${number * j}`);
            j++;
        } while (j <= 10);
    }

    // Close the readline interface
    rl.close();
});
