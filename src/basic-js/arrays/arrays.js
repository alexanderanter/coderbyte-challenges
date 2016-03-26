/**
 * Module for arrays
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

exports.longestWord = function(data) {
    var result = "";
  	var arr = data.split(/[^a-zA-Z0-9.]/);
  	var len = arr.length;
  	var i;

  	for (i = 0; i < len; i++){

      	if (i === 0) {
        	result = arr[i];
        }else {
        	if(arr[i].length > result.length) {
            	result = arr[i];
            }
        }
    }
  return result;
};

exports.alphabetSoup = function(data) {
  var arr = data.split("");
  arr.sort();
  return arr.join("");
};

exports.wordCount = function(data) {
  return data.split(" ").length;
};
