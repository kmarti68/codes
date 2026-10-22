// function printValues() {
//     let value1 = 10;
//     let value2 = 20;
//     let value3 = 30;
//     console.log("Value 1:", value1);
//     console.log("Value 2:", value2);
//     console.log("Value 3:", value3);

//     for (let i = 1; i <= 5; i++) {
//         console.log("Loop iteration:", i);
//     }
// }

// // printValues(); // Call the function to execute its code

// function calculateSum(a, b) {
//     return a + b;
// }   

// let mysum = calculateSum(5, 10);
// console.log("Sum:", mysum); // Output: Sum: 15

// let mystring = calculateSum("Hello, ", "World!");
// console.log("String concatenation:", mystring); // Output: String concatenation: Hello, World!

// // Primitive parameter: changing the parameter does not change the original value.
// function changePrimitive(inputparam) {
//     inputparam = 100;
//     console.log("Inside changePrimitive:", inputparam);
// }

// let originalNumber = 10;
// changePrimitive(originalNumber);
// console.log("After changePrimitive:", originalNumber); // Still 10

// // Object parameter: changing a property also changes the original object.
// function changeObject(inputObject) {
//     inputObject.name = "Maria";
//     console.log("Inside changeObject:", inputObject.name);
// }

// let student = { name: "Alex" };
// console.log("Before changeObject:", student.name); // Alex
// changeObject(student);
// console.log("After changeObject:", student.name); // Now Maria

// Shallow copy: nested objects are still shared.
// let originalStudent = {
//     name: "John",
//     address: { city: "Houston" }
// };

// let newStudent = originalStudent;
// newStudent.name = "Maria";
// newStudent.address.city = "Dallas";

// console.log("OriginalStudent name:", originalStudent.name);
// console.log("OriginalStudent city:", originalStudent.address.city); // Dallas
// console.log("NewStudent name:", newStudent.name);
// console.log("NewStudent city:", newStudent.address.city); // Dallas

// let myastudent = 'John';
// let mybstudent = myastudent;
// mybstudent = 'Maria';

// console.log("myastudent:", myastudent); // John
// console.log("mybstudent:", mybstudent); // Maria    

// let shallowCopy = { ...originalStudent };
// shallowCopy.name = "Lisa";
// shallowCopy.address.city = "Dallas";

// console.log("Original name:", originalStudent.name); // John
// console.log("Original city after shallow copy change:", originalStudent.address.city); // Dallas

// Deep copy: nested objects are copied too.
let anotherStudent = {
    name: "John",
    address: { city: "Houston" }
};

let deepCopy = structuredClone(anotherStudent);
deepCopy.name = "Lisa";
deepCopy.address.city = "Dallas";

console.log("Original name:", anotherStudent.name); // John
console.log("Original city after deep copy change:", anotherStudent.address.city); // Houston

// // // Stack: Last In, First Out (LIFO)
// let stack = [];
// stack.push("Book 1"); // Add to the end
// stack.push("Book 2");
// stack.push("Book 3");
// console.log("Stack:", stack);
// console.log("Stack: 0", stack[0]); // Book 1
// console.log("Stack: 1", stack[1]); // Book 2
// console.log("Stack: 2", stack[2]); // Book 3

// let removedBook = stack.pop(); // Remove from the end
// console.log("Removed from stack:", removedBook); // Book 3
// console.log("Stack after pop:", stack);

// // Queue: First In, First Out (FIFO)
// let queue = [];
// queue.push("Customer 1"); // Add to the end
// queue.push("Customer 2");
// queue.push("Customer 3");
// console.log("Queue:", queue);

// let servedCustomer = queue.shift(); // Remove from the beginning
// console.log("Served from queue:", servedCustomer); // Customer 1
// console.log("Queue after shift:", queue);

// // Other common array methods
// let numbers = [1, 2, 3, 4, 5];

// numbers.unshift(0);                 // Add to the beginning
// console.log("After unshift:", numbers);

// let doubled = numbers.map(number => number * 2);
// console.log("Doubled:", doubled);

// let evenNumbers = numbers.filter(number => number % 2 === 0);
// console.log("Even numbers:", evenNumbers);

// console.log("Includes 3:", numbers.includes(3));
// console.log("Part of array:", numbers.slice(1, 4));
// console.log("Joined:", numbers.join(" - "));
