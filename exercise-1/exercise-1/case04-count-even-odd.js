// Case 4: Count Even and Odd Numbers (loop + if)
//
// Task: Go through the array and count how many numbers are even
// and how many are odd.
//
// Hint: a number is even if  number % 2 === 0

const numbers = [3, 8, 15, 22, 7, 10, 41, 6];

let evenCount = 0;
let oddCount = 0;

for (const number of numbers) {
  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

// ---- Check your work (do not change) ----
console.log("Even:", evenCount); // expected: Even: 4
console.log("Odd:", oddCount);   // expected: Odd: 4
