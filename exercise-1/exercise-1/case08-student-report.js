// Case 8: Student Report (function that creates and returns an object)
//
// Task: Write a function makeReport(name, scores) that creates an object
// and returns it. The object should have:
//   name     -> the student's name
//   average  -> the average of the scores
//   passed   -> true if the average is 60 or higher, otherwise false

function makeReport(name, scores) {
  let total = 0;
  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  const average = total / scores.length;
  const report = {
    name: name,
    average: average,
    passed: average >= 60
  };
  return report;
}

// ---- Check your work (do not change) ----
console.log(makeReport("Ann", [90, 80, 70]));
// expected: { name: 'Ann', average: 80, passed: true }

console.log(makeReport("Ben", [50, 40, 60]));
// expected: { name: 'Ben', average: 50, passed: false }
