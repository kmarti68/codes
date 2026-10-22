function printValues() {
    let value1 = 10;
    let value2 = 20;
    let value3 = 30;
    console.log("Value 1:", value1);
    console.log("Value 2:", value2);
    console.log("Value 3:", value3);

    for (let i = 1; i <= 5; i++) {
        console.log("Loop iteration:", i);
    }
}

// printValues(); // Call the function to execute its code

function calculateSum(a, b) {
    return a + b;
}   

let mysum = calculateSum(5, 10);
console.log("Sum:", mysum); // Output: Sum: 15

let mystring = calculateSum("Hello, ", "World!");
console.log("String concatenation:", mystring); // Output: String concatenation: Hello, World!