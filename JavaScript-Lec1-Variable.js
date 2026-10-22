// Simple examples of JavaScript data types

// String: text
let studentName = "Alex";

// Number: an integer or decimal
let age = 20;
let grade = 95.5;

// Boolean: true or false
let isStudent = true;

// Undefined: a variable without a value
let favoriteColor;

// Null: an intentionally empty value
let middleName = null;

// Array: a list of values
let courses = ["HTML", "CSS", "JavaScript"];

// Object: related information stored as properties
let student = {
    name: "Alex",
    age: 20
};

// BigInt: a very large whole number
let veryLargeNumber = 12345678901234567890n;

// Symbol: a unique value
let studentId = Symbol("studentId");

console.log(studentName);
console.log(age);
console.log(grade);
console.log(isStudent);
console.log(favoriteColor);
console.log(middleName);
console.log(courses);
console.log(student);
console.log(veryLargeNumber);
console.log(studentId);

// --------------------------------------------------
// The difference between let and const
// --------------------------------------------------

// Use let when the value may change.
let score = 80;
score = 90;
console.log(score); // 90

// Use const when the variable should not be reassigned.
const schoolName = "University of Houston";
console.log(schoolName);

// This would cause an error because a const cannot be reassigned:
// schoolName = "Another School";

// Both let and const have block scope.
if (true) {
    let classNumber = 2336;
    const semester = "Fall 2026";

    console.log(classNumber);
    console.log(semester);
}

// These variables are not available outside the if block:
// console.log(classNumber);
// console.log(semester);

// --------------------------------------------------
// Mutable and immutable values
// --------------------------------------------------

// Immutable value: a string cannot be changed in place.
let greeting = "Hello";
greeting[0] = "Y";
console.log(greeting); // Hello

// We can only assign a new string to the variable.
greeting = "Yellow";
console.log(greeting); // Yellow

// Mutable value: an array can be changed in place.
const colors = ["red", "blue"];
colors[0] = "green";
colors.push("yellow");
console.log(colors); // ["green", "blue", "yellow"]

// The const array can be changed, but it cannot be replaced.
// This would cause an error:
// colors = ["black", "white"];
