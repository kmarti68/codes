// Case 3: Multiplication Table (loop)
//
// Task: Print the multiplication table for the number below, from 1 to 10.
// Each line should look like:  5 x 1 = 5
//
// Hint: use a for loop from 1 to 10 and console.log with a template string.

const number = [5, 6];

// TODO: write your loop here
for (let j = 1; j <= 10; j++) {
  for(let i = 0; i < number.length; i++) {
    console.log(`${number[i]} x ${j} = ${number[i] * j}`);
  }
}
// Expected output:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
