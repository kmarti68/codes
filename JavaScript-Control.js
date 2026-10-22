// // --------------------------------------------------
// // 1. If structure
// // --------------------------------------------------

// // An if statement runs code only when a condition is true.
// const temperature = 85;

// if (temperature >= 90) {
//     console.log("It is very hot outside.");
// } else if (temperature >= 70) {
//     console.log("The weather is warm.");
// } else {
//     console.log("The weather is cool.");
// }


// // --------------------------------------------------
// // 2. For loop structure
// // --------------------------------------------------

// // A for loop repeats code a known number of times.
// for (let number = 1; number <= 5; number++) {
//     console.log("Number:", number);
// }


// // --------------------------------------------------
// // 3. While loop structure
// // --------------------------------------------------

// // A while loop repeats as long as its condition is true.
// let countdown = 3;

// while (countdown > 0) {
//     console.log(countdown);
//     countdown--;
// }

// console.log("Go!");


// --------------------------------------------------
// 4. Using an if statement inside a loop
// --------------------------------------------------

// This example prints whether each number is even or odd.
for (let number = 1; number <= 5; number++) {
    if (number % 2 === 0) {
        console.log(number, "is even");
    } else {
        console.log(number, "is odd");
    }
}


// // --------------------------------------------------
// // Student practice problem
// // --------------------------------------------------

// // Write a program that checks the numbers from 1 through 10.
// // For each number:
// //   1. Print "Divisible by 3" if the number is divisible by 3.
// //   2. Otherwise, print the number.
// //
// // Hint:
// // Use a for loop, an if/else statement, and the remainder operator (%).


// // --------------------------------------------------
// // Sample solution
// // --------------------------------------------------

// for (let number = 1; number <= 10; number++) {
//     if (number % 3 === 0) {
//         console.log("Divisible by 3");
//     } else {
//         console.log(number);
//     }
// }
