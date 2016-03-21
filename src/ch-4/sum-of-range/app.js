var sumOfRange = require("./sum-of-range");
var result1 = sumOfRange.range(1, 10);
var result2 = sumOfRange.range(5, 2, -1);
var result3 = sumOfRange.sum(sumOfRange.range(1, 10));
var result4 = sumOfRange.range(1, 10, 2);

// Print the result to the terminal (console)
console.log(result1); // → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

console.log(result2); // → [5, 4, 3, 2]

console.log(result3); // → 55

console.log(result4); // →  [1, 3, 5, 7, 9]
