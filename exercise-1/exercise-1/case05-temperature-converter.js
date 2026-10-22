// Case 5: Temperature Converter (functions)
//
// Task: Write two functions.
//   celsiusToFahrenheit(c)  ->  c * 9 / 5 + 32
//   fahrenheitToCelsius(f)  ->  (f - 32) * 5 / 9

function celsiusToFahrenheit(c) {
  return c * 9 / 5 + 32;
}

function fahrenheitToCelsius(f) {
  return (f - 32) * 5 / 9;
}


function c2f(inputcs) {
  inputcs.forEach((c) => {
    console.log(`${c}°C = ${celsiusToFahrenheit(c)}°F`);
  });
}

// ---- Check your work (do not change) ----
console.log(celsiusToFahrenheit(0));   // expected: 32
console.log(celsiusToFahrenheit(100)); // expected: 212
console.log(fahrenheitToCelsius(32));  // expected: 0
console.log(fahrenheitToCelsius(212)); // expected: 100

c2f([0, 20, 37, 100]); // expected: 0°C = 32°F, 20°C = 68°F, 37°C = 98.6°F, 100°C = 212°F