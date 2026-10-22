// Case 6: Find the Largest Number (function + loop + array)
//
// Task: Write a function findLargest(numbers) that returns the biggest
// number in the array.
//
// Do NOT use Math.max. Practice with a loop instead.
// Hint: start with the first item, then compare it with each other item.

function findLargest(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

// ---- Check your work (do not change) ----
console.log(findLargest([4, 9, 2, 7]));      // expected: 9
console.log(findLargest([-5, -2, -9]));      // expected: -2
console.log(findLargest([100]));             // expected: 100

console.log(findLargest([]));      // expected: undefined