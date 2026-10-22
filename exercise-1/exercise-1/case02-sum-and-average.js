// Case 2: Sum and Average (loop + array)
//
// Task: Use a loop to add up all the numbers in the array,
// then calculate the average.

const numbers = [10, 20, 30, 40, 50];

let sum = 0; 


for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

let average = 0;
average = sum / numbers.length;

// ---- Check your work (do not change) ----
console.log("Sum:", sum);         // expected: Sum: 150
console.log("Average:", average); // expected: Average: 30
