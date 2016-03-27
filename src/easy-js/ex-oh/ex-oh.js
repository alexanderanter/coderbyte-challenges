/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";
//creates an object with a key for each chars and the value of their occurrences
function charOccur(data){
  var result = {};
  var i;
  var len = data.length;
  for (i = 0; i < len; i++) {
    var currentChar = data.charAt(i);
    if(currentChar === " "){
      currentChar = "whitespace";
    }

    if(result[currentChar] === undefined) {
      result[currentChar] = 1;
    } else {
      result[currentChar] += 1;
    }
  }
  return result;
}
exports.exOh = function(data) {
  var myChars = charOccur(data);

if(myChars['x'] === myChars['o']){
  return true;
}else {
  return false;
}

};
