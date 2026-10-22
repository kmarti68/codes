// Case 7: Shopping Cart Total (array of objects + loop + function)
//
// Task: Write a function getTotal(cart) that returns the total price.
// Each item has a price and a quantity, so the cost of one item is
// price * quantity.

const cart = [
  { name: "Notebook", price: 3, quantity: 4 },
  { name: "Pen", price: 1, quantity: 10 },
  { name: "Backpack", price: 25, quantity: 1 },
];

function getTotal(cart) {
  let total = 0;
  for (const item of cart) {
    total += item.price * item.quantity;
  }
  return total;
}

// ---- Check your work (do not change) ----
console.log("Total:", getTotal(cart)); // expected: Total: 47

// Bonus: print each item on its own line, like  Notebook: 12
