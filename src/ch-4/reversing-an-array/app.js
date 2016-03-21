var reversedArray = require("./reversing-an-array");
var result1 = reversedArray.reverseArray(["A", "B", "C"]);
var arrayValue = [1, 2, 3, 4, 5];
reversedArray.reverseArrayInPlace(arrayValue);

// Print the result to the terminal (console)
console.log(result1); // → ["C", "B", "A"];
console.log(arrayValue); // → [5, 4, 3, 2, 1]
