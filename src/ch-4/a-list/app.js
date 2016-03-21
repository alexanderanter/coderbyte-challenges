var alist = require("./a-list");
var result1 = alist.arrayToList([10, 20]);
var result2 = alist.listToArray(alist.arrayToList([10, 20, 30]));
var result3 = alist.prepend(10, alist.prepend(20, null));

var result4 = alist.nth(alist.arrayToList([10, 20, 30]), 1);

// Print the result to the terminal (console)

console.log(result1); // → {value: 10, rest: {value: 20, rest: null}}
console.log(result2); // → [10, 20, 30]
console.log(result3); // → {value: 10, rest: {value: 20, rest: null}}
console.log(result4); // → 20

