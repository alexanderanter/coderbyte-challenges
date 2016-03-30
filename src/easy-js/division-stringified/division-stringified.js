/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.divisionStringified = function(num1, num2) {
    var result = Math.round(num1/num2);
    result = result.toString();
    var finalString = result;

    if(result.length > 3) {
      var buckStopper;
      var buckStarter = -3;
// start the string with the last 3 digits
      finalString = result.slice(buckStarter, buckStopper);

// move the position up the string by 3 with 3 steps starting from the end
// and add it to the beginning of the string until the string is complete
      while (buckStarter > result.length * -1) {
        buckStopper = buckStarter;
        buckStarter -= 3;
        finalString = result.slice(buckStarter, buckStopper) + "," + finalString;
      }
    }

    return finalString;
};
