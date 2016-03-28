/**
 * Module for
 *
 * @author alexanderanter
 * @version 1.0.0
 */

"use strict";

var checkOccurence = function(data) {
  var result = {};
  var i;
  var len = data.length;

  for (i = 0; i < len; i++) {
    var currentChar = data.charAt(i);
    if (result[currentChar] === undefined) {
      result[currentChar] = 1;
    } else {
      result[currentChar] += 1;
    }
  }
  return result;
};

var mostFrequent = function (keys, myWordObj) {
  var highestVal = 0;
  keys.forEach(function(key) {
  if (myWordObj[key] > highestVal) {
      highestVal = myWordObj[key];
    }
 });

 return highestVal;

};

exports.letterCount = function(data) {
  var result = 0;
  var dataArr = data.split(" ");
  var len = dataArr.length;
  var i = 0;
  var keys;
  var highestVal = 0;

  for (i; i < len; i++) {
     keys = Object.keys(checkOccurence(dataArr[i]));
     if (mostFrequent(keys, checkOccurence(dataArr[i])) > highestVal) {
       highestVal = mostFrequent(keys, checkOccurence(dataArr[i]));
       result = dataArr[i];
     }
  }

  if (highestVal === 1) {
    result = -1;
  }

  return result;
};
