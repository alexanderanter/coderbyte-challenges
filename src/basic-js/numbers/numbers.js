/**
 * Module for bean counting
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
