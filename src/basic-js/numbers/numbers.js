/**
 * Module for numbers
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.timeConvert = function(data) {
    var minutes = data % 60;
    var hours = (data - minutes) / 60;

    return hours + ":" + minutes;
};
exports.factorial = function(data) {
  var result = 1;
  for(var i = 0; i < data; i++){
    result += result * i;
  }
  return result;
};
exports.simpleAdding = function(data) {
  var result = 0;
  	var i = 0;
  	for (i; i < data + 1; i++) {
    	result += i;
    }
  	return result;
};
exports.checkNums = function(num1, num2) {

  if (num1 === num2) {
     return "-1";
  }else {
    return (num2 > num1);//->returns true or false depending on the values
  }

};
