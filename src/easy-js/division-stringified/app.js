var divString = require("./division-stringified");

var result = divString.divisionStringified(4, 3);
console.log(result);

var result2 = divString.divisionStringified(503394930, 43);
console.log(result2 + "  should equal " + "11,706,859");

// var result3 = divString.divisionStringified(101077282, 21123);
// console.log(result3 + "  should equal " + "4,785");
//
// var result4 = divString.divisionStringified(123456789, 10000);
// console.log(result4 + "  should equal " + "12,346");
