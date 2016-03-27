/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";
//creates an object with a key for each chars and the value of their occurrences

exports.arrayAddition = function(data) {

  var largestNum = Math.max.apply(Math, data);
  var len = data.length;
  var i = 0;
  var sum = 0;
  var result = false;
  for (i; i < len; i++) {
    sum = data[i];
    for (var j = 0; j < len; j++) {

        if(i !== j) {
            console.log(largestNum);
            console.log(i + j + "ok");

        }
        sum += data[j];
        if (largestNum === sum) {
          result = true;
        }


    }

  }
  return result;

};
