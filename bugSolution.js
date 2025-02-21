function foo(a, b) {
  // Check if both arguments are numbers
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b; // Perform numerical addition
  } else {
    return NaN; //Handle non-number inputs appropriately
  }
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(1, "2")); // Output: NaN 