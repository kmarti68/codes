// Case 1: Grade Letter (if / else if / else)
//
// Task: Write a function getGrade(score) that returns a letter grade.
//   90 or above -> "A"
//   80 to 89    -> "B"
//   70 to 79    -> "C"
//   60 to 69    -> "D"
//   below 60    -> "F"

function getGrade(score) {
  // TODO: use if / else if / else and return the letter
if (score >= 90) {
  return "A";
} else if (score >= 80 && score < 90) {
  return "B";
} else if (score >= 70) {
  return "C";
} else if (score >= 60) {
  return "D";
} else {
  return "F";
}

return lettergrade; 
} 

// ---- Check your work (do not change) ----
console.log(getGrade(95)); // expected: A
console.log(getGrade(85)); // expected: B
console.log(getGrade(72)); // expected: C
console.log(getGrade(65)); // expected: D
console.log(getGrade(30)); // expected: F

console.log(5+8*5); 