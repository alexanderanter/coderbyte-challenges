/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";


exports.divisionStringified = function(num1, num2) {

  var result = "";
  var cutOfString = "";
  var part1 = '';
  var part2 = '';
  var finalRes;
  var diff = 0;
  result = Math.round(num1/num2);
  result = result.toString();
  finalRes = '';
  if(result.length > 4) {
    // var part1 = result.substring(0,2);
    // var part2 = result.substring(2);
    //
    // result = part1 + "," + part2;
    // result = result.split("").reverse().join("");
    // cutOfString = result;
    // while(diff > 3) {
    //
    //
    //
    // }

          // finalRes = Math.abs(result.substring(-3,-1));
          // console.log(result.split("").reverse().join(""));
    
      finalRes = result.slice(-3) + finalRes;

  }


  return finalRes;

 //
 //  var res = Math.round(num1/num2);
 //  var string = res.toString();
 //  var numleng = string.length;
 //  var newstring = string;
 //
 // if (numleng > 3) {
 //    var arr = string.split("");
 //   for (var i= numleng - 3; i > 0; i = i - 3) {
 //        arr.splice(i, 0, ",");
 //   }
 //    var newstring = arr.join("");
 // }
 //
 //  return newstring;
};
