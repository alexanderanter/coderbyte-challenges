
var obj = {here: {is: "an"}, object: 2};
var deepComparison = require("./deep-comparison");
var result1 = deepComparison.deepEqual(obj, obj);
var result2 = deepComparison.deepEqual(obj, {here: 1, object: 2});
var result3 = deepComparison.deepEqual(obj, {here: {is: "an"}, object: 2});

deepComparison.deepEqual(null);
console.log(result1); // →
console.log(result2); // →
console.log(result3); // →
