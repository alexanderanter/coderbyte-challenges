/**
 * Module for bean counting
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

exports.vowelCount = function(data) {
  var result = 0;
  var vowels = ['a','e','i','o','u'];
  var dataArr = data.split('');
  var i = 0;
  for (i; i < dataArr.length; i++) {
      if(vowels.indexOf(dataArr[i]) !== -1) {
        result += 1;
      }
  }
  return result;
};
