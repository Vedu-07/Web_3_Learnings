const crypto = require("crypto");

// const input = "100xdevs";
// const hash = crypto.createHash('sha256').update(input).digest('hex');

// console.log(hash);

// Assignment 1

// What if I ask you the following question — Give me an input string that outputs a SHA-256 hash that starts with 00000 . How will you do it?
// A: You will have to brute force until you find a value that starts with 00000

// My SolN :- 
// function findHash() {
//     let input = 0;
//     let found = false;
//     const maxIterations = 1000000; // Set a reasonable limit for debugging

//     while (!found && input < maxIterations) {
//         let inputt = input.toString();
//         let hash = crypto.createHash('sha256').update(inputt).digest('hex');
//         if (hash.startsWith("00000")) {
//             console.log(`Input: ${input}, Hash: ${hash}`);
//             found = true;
//         }
//         input++;
//     }

//     if (!found) {
//         console.log('No matching hash found within the iteration limit.');
//     }
// }

// findHash();

// Harkirats Soln

// const crypto = require('crypto');

// // Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);

// Assignment 2
// What if I ask you that the input string should start with 100xdevs ? How would the code change?



// Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = "100xdevs" + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);


// Assignment 3 
// What if I ask you to find a nonce for the following input - 

// harkirat => Raman | Rs 100
// // Ram => Ankit | Rs 10



// Function to find an input string that produces a hash starting with '00000'
// function findHashWithPrefix(prefix) {
//     let input = 0;
//     while (true) {
//         let inputStr = ` harkirat => Raman | Rs 100
//                          Ram => Ankit | Rs 10
//                          ` + input.toString();
//         let hash = crypto.createHash('sha256').update(inputStr).digest('hex');
//         if (hash.startsWith(prefix)) {
//             return { input: inputStr, hash: hash };
//         }
//         input++;
//     }
// }

// // Find and print the input string and hash
// const result = findHashWithPrefix('00000');
// console.log(`Input: ${result.input}`);
// console.log(`Hash: ${result.hash}`);