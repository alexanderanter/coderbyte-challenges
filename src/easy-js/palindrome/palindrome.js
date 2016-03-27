/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";
//creates an object with a key for each chars and the value of their occurrences

exports.palindrome = function(str) {
  var result = true;
  var strArr = str.split("");
  var noWhiteSpaceArr = [];
  var i;
  var len = strArr.length;

  for (i = 0; i < len; i++) {
    if(strArr[i] !== " " && strArr[i] !== "." && typeof strArr[i] !== "number") {
      noWhiteSpaceArr.push(strArr[i]);
    }
  }

  if(noWhiteSpaceArr.join("") !== noWhiteSpaceArr.reverse().join("")) {
    result = false;
  }
  
  return result;
};
